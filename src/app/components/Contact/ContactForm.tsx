"use client";
import Link from "next/link";
import { useState } from "react";
import { sendEmail } from "@/lib/email.actions";
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>("");
  const [sentMail, setSentMail] = useState(false);
  const [loadState, setLoadState] = useState<
    "captcha" | "solved" | "sending" | "sent" | "error"
  >();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoadState("sending");
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      setLoadState("captcha");
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
      setLoadState("sent");
    } catch (error) {
      setLoadState("error");
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
              onChange={(token) => {
                setRecaptchaToken(token);
                setLoadState("solved");
              }}
            />
          ) : loadState === "sending" ? (
            <div className="alert alert-info" role="alert">
              <div className="flex-1">
                <label>Sending email...</label>
              </div>
            </div>
          ) : loadState === "solved" ? (
            <button type="submit" className="btn btn-secondary">
              Send Message
            </button>
          ) : loadState === "sent" ? (
            <div className="alert alert-success" role="alert">
              <div className="flex-1">
                <label>
                  Message Successfully received. I&apos;ll get back to you soon!
                </label>
              </div>
            </div>
          ) : loadState === "error" ? (
            <div className="alert alert-error" role="alert">
              <div className="flex-1">
                <label>Error sending email. Please try again later.</label>
              </div>
            </div>
          ) : (
            <div className="alert alert-error" role="alert">
              <div className="flex-1">
                <label>Complete the reCAPTCHA</label>
              </div>
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
