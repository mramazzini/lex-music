"use client";

import { sendEmail } from "@/lib/email.actions";

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const message = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const phone = (e.currentTarget.elements[3] as HTMLInputElement).value;
    try {
      await sendEmail({
        name,
        email,
        phone,
        message,
      });
      alert("Email sent successfully");
    } catch (error) {
      alert("Failed to send email");
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <h1 className="text-4xl text-white">Contact Us</h1>
      <div className="flex flex-col w-1/2 mt-4">
        <label className="text-white" htmlFor="name">
          Name
        </label>
        <input className="p-2 rounded-md" type="text" id="name" name="name" />
      </div>
      <div className="flex flex-col w-1/2 mt-4">
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 rounded-md"
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div className="flex flex-col w-1/2 mt-4">
        <label className="text-white" htmlFor="phone">
          Phone
        </label>
        <input className="p-2 rounded-md" type="tel" id="phone" name="phone" />
      </div>
      <div className="flex flex-col w-1/2 mt-4">
        <label className="text-white" htmlFor="message">
          Message
        </label>
        <textarea className="p-2 rounded-md" id="message" name="message" />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md w-1/2 mt-4">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
