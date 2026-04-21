import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company } = body;

    if (!name || !email || !phone || !company) {
      return Response.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
  from: "AccuraCore <onboarding@resend.dev>", // will change it later if require
  to: process.env.SALES_EMAIL,
  subject: "New Lead from AccuraCore Website",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
    
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
      
      <!-- HEADER -->
      <div style="background: #0062a5; padding: 25px; text-align: center;">
        <img 
          src="https://accuracore.com/Logos/Accuracore/accuraCore-logo.png" 
          alt="AccuraCore Logo" 
          style="max-width: 180px;"
        />
      </div>

      <!-- BODY -->
      <div style="padding: 25px;">
        
        <h2 style="text-align: center; margin-bottom: 25px; color: #333;">
          New Lead Details
        </h2>

        <!-- DETAILS BOX -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          
          <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #888;">Name</p>
            <p style="margin: 5px 0 0; font-weight: bold;">${name}</p>
          </div>

          <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #888;">Email</p>
            <p style="margin: 5px 0 0; font-weight: bold;">${email}</p>
          </div>

          <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #888;">Phone</p>
            <p style="margin: 5px 0 0; font-weight: bold;">${phone}</p>
          </div>

          <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #888;">Company</p>
            <p style="margin: 5px 0 0; font-weight: bold;">${company}</p>
          </div>

        </div>

      </div>

      <!-- FOOTER -->
      <div style="text-align: center; padding: 20px; border-top: 1px solid #eee;">
        
        <p style="margin: 0; font-size: 14px;">
          🌐 <a href="https://accuracore.com" style="color: #0062a5; text-decoration: none;">
            https://accuracore.com
          </a>
        </p>

        <p style="margin: 8px 0 0; font-size: 14px;">
          📧 <a href="mailto:admin@accuracore.com" style="color: #0062a5; text-decoration: none;">
            admin@accuracore.com
          </a>
        </p>

      </div>

    </div>

  </div>
  `,
});

    return Response.json({ success: true, data }, { status: 200 });

  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}