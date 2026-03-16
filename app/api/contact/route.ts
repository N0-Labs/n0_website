import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { company, domain, domainOther, role, email, info } = await req.json();

  const domainLabel = domain === "other" ? `Other — ${domainOther}` : domain;

  const { error } = await resend.emails.send({
    from: "Null Labs Contact <kris@n0labs.com>",
    to: "founders@n0labs.com",
    replyTo: email,
    subject: `Demo request from ${company}`,
    text: [
      `Company: ${company}`,
      `Domain: ${domainLabel}`,
      `Role: ${role}`,
      `Email: ${email}`,
      info ? `Additional info:\n${info}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
