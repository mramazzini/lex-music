"use server";
const nodemailer = require("nodemailer");

async function sendEmail({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

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
