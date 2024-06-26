"use server";
const nodemailer = require("nodemailer");

async function sendEmail({
  name,
  email,
  phone,
  message,
  recaptchaToken,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  recaptchaToken: string;
}) {
  try {
    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );
    if (!captchaResponse.ok) {
      throw new Error("Failed to verify captcha");
    }

    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("message", message);
    let info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: ``,
      html: `<h3>Sender:</h3><p>${name}</p><h3>Message:</h3><p>${message}</p><h3>Contact information:</h3><p>email: ${email} <br/> phone: ${phone}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    throw new Error("Failed to send email");
  }
}

export { sendEmail };
