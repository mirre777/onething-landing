import { NextResponse } from "next/server";
import Redis from "ioredis";
import { Resend } from "resend";

export const runtime = "nodejs";

const KEY = "onething:waitlist:emails";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let redis: Redis | null = null;
function getRedis() {
  if (!redis && process.env.KV_REDIS_URL) {
    redis = new Redis(process.env.KV_REDIS_URL, { lazyConnect: true, maxRetriesPerRequest: 2 });
  }
  return redis;
}

export async function POST(req: Request) {
  let email: string;
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const client = getRedis();
  if (!client) {
    return NextResponse.json({ error: "Waitlist not configured yet." }, { status: 503 });
  }

  const score = Date.now();
  const added = await client.zadd(KEY, "NX", score, email);
  const duplicate = added === 0;

  if (!duplicate && process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: email,
        subject: "You're on the OneThing waitlist",
        text: "Thanks for joining. We'll email you as soon as your spot opens up.\n\nOneThing helps ADHD brains pick what to do next. One card. One decision. No menus.\n\n— Mirre",
      });
    } catch (err) {
      console.error("[waitlist] resend error:", err);
    }
  }

  return NextResponse.json({ ok: true, duplicate });
}
