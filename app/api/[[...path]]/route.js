import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

// ---------- MongoDB connection ----------
let client;
let db;
async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    db = client.db(process.env.DB_NAME || "melodie_du_corps");
  }
  return db;
}

function cors(response) {
  response.headers.set("Access-Control-Allow-Origin", process.env.CORS_ORIGINS || "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 200 }));
}

// ---------- Resend email helper ----------
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "lamelodieducorps.pro@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "contact@lamelodieducorps.com";
const SITE_URL = process.env.SITE_URL || "https://www.lamelodieducorps.com";
const GUIDE_PDF_URL = process.env.GUIDE_PDF_URL || "";

async function sendEmail({ to, subject, html, replyTo }) {
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

// ---------- Email templates ----------
function guideEmailHtml(name = "") {
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

function contactNotificationHtml(payload) {
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

function contactConfirmationHtml(name) {
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

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---------- Main router ----------
async function handleRoute(request, { params }) {
  const resolvedParams = await params;
  const { path = [] } = resolvedParams || {};
  const route = `/${(path || []).join("/")}`;
  const method = request.method;

  try {
    const db = await connectToMongo();

    // GET /api/ → hello
    if ((route === "/" || route === "") && method === "GET") {
      return cors(NextResponse.json({ message: "La Mélodie du Corps API is alive" }));
    }

    // POST /api/newsletter
    if (route === "/newsletter" && method === "POST") {
      const body = await request.json();
      if (!isValidEmail(body.email)) {
        return cors(NextResponse.json({ error: "Email invalide" }, { status: 400 }));
      }
      const source = body.source || "exit_intent";
      const existing = await db.collection("newsletter").findOne(
        { email: body.email },
        { projection: { _id: 0 } }
      );
      let entry;
      if (existing) {
        entry = existing;
      } else {
        entry = {
          id: uuidv4(),
          email: body.email,
          source,
          created_at: new Date().toISOString(),
        };
        await db.collection("newsletter").insertOne({ ...entry });
      }
      // Fire & forget email
      sendEmail({
        to: body.email,
        subject: "Ton guide « Mon cycle, mon allié » 🌿",
        html: guideEmailHtml(),
      }).catch((e) => console.error("newsletter email error", e));
      return cors(NextResponse.json(entry));
    }

    // GET /api/newsletter
    if (route === "/newsletter" && method === "GET") {
      const items = await db
        .collection("newsletter")
        .find({}, { projection: { _id: 0 } })
        .sort({ created_at: -1 })
        .limit(1000)
        .toArray();
      return cors(NextResponse.json(items));
    }

    // POST /api/contact
    if (route === "/contact" && method === "POST") {
      const body = await request.json();
      if (!body.name || !isValidEmail(body.email) || !body.message || !body.message.trim()) {
        return cors(
          NextResponse.json(
            { error: "Champs manquants (name, email, message requis)" },
            { status: 400 }
          )
        );
      }
      const entry = {
        id: uuidv4(),
        name: String(body.name).slice(0, 200),
        email: body.email,
        phone: String(body.phone || "").slice(0, 50),
        subject: String(body.subject || "Demande d'information").slice(0, 200),
        message: String(body.message).slice(0, 5000),
        created_at: new Date().toISOString(),
      };
      await db.collection("contacts").insertOne({ ...entry });

      // Notify Apolline
      sendEmail({
        to: NOTIFY_EMAIL,
        subject: `Nouveau message de ${entry.name} · ${entry.subject}`,
        html: contactNotificationHtml(entry),
        replyTo: entry.email,
      }).catch((e) => console.error("contact notify error", e));

      // Confirm to client
      sendEmail({
        to: entry.email,
        subject: "Ton message est bien arrivé 🌿",
        html: contactConfirmationHtml(entry.name),
      }).catch((e) => console.error("contact confirm error", e));

      return cors(NextResponse.json(entry));
    }

    // GET /api/contact
    if (route === "/contact" && method === "GET") {
      const items = await db
        .collection("contacts")
        .find({}, { projection: { _id: 0 } })
        .sort({ created_at: -1 })
        .limit(1000)
        .toArray();
      return cors(NextResponse.json(items));
    }

    return cors(NextResponse.json({ error: `Route ${route} not found` }, { status: 404 }));
  } catch (err) {
    console.error("API Error:", err);
    return cors(
      NextResponse.json({ error: "Internal server error", detail: String(err?.message || err) }, { status: 500 })
    );
  }
}

export const GET = handleRoute;
export const POST = handleRoute;
export const PUT = handleRoute;
export const DELETE = handleRoute;
export const PATCH = handleRoute;
