import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import {
  connectToMongo,
  cors,
  rateLimit,
  getClientIp,
  isValidEmail,
  sendEmail,
  contactNotificationHtml,
  contactConfirmationHtml,
} from "@/lib/api-common";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "lamelodieducorps.pro@gmail.com";

export async function POST(request) {
  const ip = getClientIp(request);
  if (!rateLimit(`ratelimit:contact:${ip}`, 5, 60 * 60 * 1000)) {
    return cors(NextResponse.json({ error: "Trop de requêtes, réessayez plus tard." }, { status: 429 }));
  }

  const db = await connectToMongo();
  const body = await request.json();

  if (!body.name || !isValidEmail(body.email) || !body.message || !body.message.trim()) {
    return cors(NextResponse.json({ error: "Champs manquants (name, email, message requis)" }, { status: 400 }));
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

  sendEmail({
    to: NOTIFY_EMAIL,
    subject: `Nouveau message de ${entry.name} · ${entry.subject}`,
    html: contactNotificationHtml(entry),
    replyTo: entry.email,
  }).catch(console.error);

  sendEmail({
    to: entry.email,
    subject: "Ton message est bien arrivé 🌿",
    html: contactConfirmationHtml(entry.name),
  }).catch(console.error);

  return cors(NextResponse.json(entry));
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 200 }));
}
