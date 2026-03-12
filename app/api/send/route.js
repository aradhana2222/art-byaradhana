import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    console.log("Form data:", name, email, message);
console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
    

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Commission Request",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    console.log("Email sent:", info);

    return Response.json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false });
  }
}