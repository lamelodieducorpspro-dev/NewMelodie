import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import {
  connectToMongo,
  cors,
  rateLimit,
  getClientIp,
  isValidEmail,
  sendEmail,
  guideEmailHtml,
} from "@/lib/api-common";

export async function POST(request) {
  const ip = getClientIp(request);
  if (!rateLimit(`ratelimit:newsletter:${ip}`, 3, 60 * 60 * 1000)) {
    return cors(NextResponse.json({ error: "Trop de requêtes, réessayez plus tard." }, { status: 429 }));
  }

  const db = await connectToMongo();
  const body = await request.json();
  if (!isValidEmail(body.email)) {
    return cors(NextResponse.json({ error: "Email invalide" }, { status: 400 }));
  }

  const existing = await db.collection("newsletter").findOne({ email: body.email });
  let entry;
  if (existing) {
    entry = existing;
  } else {
    entry = {
      id: uuidv4(),
      email: body.email,
      source: body.source || "exit_intent",
      created_at: new Date().toISOString(),
    };
    await db.collection("newsletter").insertOne({ ...entry });
  }

  sendEmail({
    to: body.email,
    subject: "Ton guide « Mon cycle, mon allié » 🌿",
    html: guideEmailHtml(),
  }).catch((e) => console.error("newsletter email error", e));

  return cors(NextResponse.json(entry));
}

// GET interdit pour protéger les données (P0)
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 403 });
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 200 }));
}
