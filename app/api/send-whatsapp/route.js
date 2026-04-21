import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

export async function POST(req) {
  try {
    const { name, email, phone, company } = await req.json();

    if (!name || !email || !phone || !company) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+923185508405",
      body: `New Lead from AccuraCore Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}`,
    });

    return Response.json({ success: true, sid: message.sid });
  } catch (err) {
    console.error("Twilio Error:", err);
    return Response.json({ success: false, error: err.message });
  }
}
