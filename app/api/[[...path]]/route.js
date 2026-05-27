import { NextResponse } from "next/server";
import { cors } from "@/lib/api-common";

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 200 }));
}

export async function GET() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function POST() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function PUT() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function PATCH() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}
