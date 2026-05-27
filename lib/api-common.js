import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

// Rate limit store (in-memory)
const rateLimitStore = new Map();

export function getClientIp(request) {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

export function rateLimit(key, limit, windowMs) {
  const now = Date.now();
  const record = rateLimitStore.get(key);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  if (record.count < limit) {
    record.count++;
    return true;
  }
  return false;
}

// MongoDB connection
let client;
let db;
export async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    db = client.db(process.env.DB_NAME || "melodie_du_corps");
  }
  return db;
}

// CORS helper
export function cors(response) {
  const origin = process.env.CORS_ORIGINS;
  if (origin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }
  return response;
}

// Validation
export function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Resend config
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "lamelodieducorps.pro@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "contact@lamelodieducorps.com";
const SITE_URL = process.env.SITE_URL || "https://www.lamelodieducorps.com";
const GUIDE_PDF_URL = process.env.GUIDE_PDF_URL || "";

export async function sendEmail({ to, subject, html, replyTo }) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email");
    return false;
  }
  try {
    const payload = {
      from: `La Mélodie du Corps <${FROM_EMAIL}>`,
      to: [to],
      subject,
      html,
    };
    if (replyTo) payload.reply_to = replyTo;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error", res.status, text);
      return false;
    }
    return true;
  } catch (e) {
    console.error("Resend failed:", e);
    return false;
  }
}

// Email templates
export function guideEmailHtml(name = "") {
  const greeting = name ? `Bonjour ${name},` : "Bonjour,";
  const guideLink = GUIDE_PDF_URL
    ? `<p style="text-align:center; margin:32px 0;"><a href="${GUIDE_PDF_URL}" style="background:#2C4A3B; color:#fff; padding:14px 28px; border-radius:999px; text-decoration:none; font-weight:500;">📖 Télécharger mon guide</a></p>`
    : `<p style="text-align:center; margin:24px 0; color:#4A5D54;"><em>Le guide te sera envoyé dans un instant par Apolline.</em></p>`;
  return `
  <div style="font-family: -apple-system, Arial, sans-serif; max-width:560px; margin:auto; color:#1A2421; line-height:1.6;">
    <h1 style="font-family: Georgia, serif; color:#2C4A3B; font-weight:400;">Ton guide est arrivé 🌿</h1>
    <p>${greeting}</p>
    <p>Merci pour ton inscription. Voici ton guide gratuit <em>« Mon cycle, mon allié »</em> :</p>
    ${guideLink}
    <p>Ce guide est un premier pas pour mieux comprendre ton corps et ton cycle. Prends ton temps pour le lire et reviens-y autant que tu en as besoin.</p>
    <p>Si tu as la moindre question, écris-moi directement à <a href="mailto:${NOTIFY_EMAIL}">${NOTIFY_EMAIL}</a>.</p>
    <p style="margin-top:32px;">Belle exploration,<br/><strong>Apolline · La Mélodie du Corps</strong></p>
    <hr style="border:none; border-top:1px solid #E2DCD0; margin:32px 0;" />
    <p style="font-size:12px; color:#4A5D54;">La Mélodie du Corps · Bouillante, Guadeloupe<br/><a href="${SITE_URL}" style="color:#849974;">${SITE_URL}</a></p>
  </div>`;
}

export function contactNotificationHtml(payload) {
  return `
  <div style="font-family: -apple-system, Arial, sans-serif; max-width:560px; margin:auto; color:#1A2421; line-height:1.6;">
    <h2 style="font-family: Georgia, serif; color:#2C4A3B; font-weight:400;">Nouveau message via le site 🌿</h2>
    <p><strong>Prénom :</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email :</strong> <a href="mailto:${payload.email}">${escapeHtml(payload.email)}</a></p>
    <p><strong>Téléphone :</strong> ${escapeHtml(payload.phone || "Non communiqué")}</p>
    <p><strong>Sujet :</strong> ${escapeHtml(payload.subject)}</p>
    <hr style="border:none; border-top:1px solid #E2DCD0; margin:16px 0;" />
    <p><strong>Message :</strong></p>
    <div style="background:#F9F6F0; padding:16px; border-radius:12px; white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
    <p style="margin-top:24px; color:#4A5D54; font-size:13px;">Reçu le ${payload.created_at}</p>
  </div>`;
}

export function contactConfirmationHtml(name) {
  return `
  <div style="font-family: -apple-system, Arial, sans-serif; max-width:560px; margin:auto; color:#1A2421; line-height:1.6;">
    <h1 style="font-family: Georgia, serif; color:#2C4A3B; font-weight:400;">Ton message est bien arrivé 🌿</h1>
    <p>Bonjour ${escapeHtml(name)},</p>
    <p>Merci pour ton message. Je l'ai bien reçu et je reviens vers toi <strong>sous 48 heures</strong>.</p>
    <p>Si ta demande est urgente, n'hésite pas à m'écrire directement sur WhatsApp au <a href="https://wa.me/33651166669">+33 6 51 16 66 69</a>.</p>
    <p style="margin-top:32px;">À très bientôt,<br/><strong>Apolline · La Mélodie du Corps</strong></p>
    <hr style="border:none; border-top:1px solid #E2DCD0; margin:32px 0;" />
    <p style="font-size:12px; color:#4A5D54;">La Mélodie du Corps · Bouillante, Guadeloupe<br/><a href="${SITE_URL}" style="color:#849974;">${SITE_URL}</a></p>
  </div>`;
}
