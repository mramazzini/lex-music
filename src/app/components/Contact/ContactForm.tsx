"use client";
import Link from "next/link";
import { useState } from "react";
import { sendEmail } from "@/lib/email.actions";
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>("");
  const [sentMail, setSentMail] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    try {
      await sendEmail({
        name,
        email,
        phone,
        message,
        recaptchaToken,
      });
      alert("Email sent successfully");
    } catch (error) {
      alert("Failed to send email");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="bg-transparent input border-b border border-b-primary w-full"
          name="name"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="bg-transparent input border-b border border-b-primary w-full"
          name="email"
          required
        />
      </div>
      <div className="form-control ">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="phone"
          placeholder="Your Phone"
          className="bg-transparent input border-b border border-b-primary w-full"
          name="phone"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          placeholder="Your Message"
          className="bg-transparent textarea border-b border border-b-primary w-full"
          name="message"
          required
        ></textarea>
      </div>

      <div className="divider divider-white" />

      {sentMail ? (
        <div className="alert alert-success" role="alert">
          <div className="flex-1">
            <label>Message sent successfully!</label>
          </div>
          <button className="btn btn-ghost" onClick={() => setSentMail(false)}>
            Close
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center">
          {!recaptchaToken ? (
            <ReCAPTCHA
              className="my-4"
              sitekey="6LcO-O8pAAAAAPOO62NWdar7KUpb5df6mGmc3Fnm"
              onChange={(token) => setRecaptchaToken(token)}
            />
          ) : (
            <button className="btn btn-secondary">Send</button>
          )}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
