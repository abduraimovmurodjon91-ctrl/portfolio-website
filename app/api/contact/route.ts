import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RECEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;
  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "abduraimovmurodjon91@gmail.com",
    subject: `New message from ${name}`,
    html: `
     <h2>Portfolio Contact</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>`,
  });
  if (error) {
    console.log(error);

    return NextResponse.json(
        {success:false, error},
        {status:500}
    )
  }

  return NextResponse.json({
    success: true,
    data,
  });
}

export async function GET() {
  return NextResponse.json({
    message: "GET ishlayapti",
  });
}
