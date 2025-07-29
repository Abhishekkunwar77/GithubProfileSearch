import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false); // 🆕 sending state

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true); // start sending

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Oops! Something went wrong!");
          console.error(error.text);
        }
      )
      .finally(() => setSending(false)); // stop sending regardless
  };

  return (
    <section className="py-10 px-4 mt-5">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center text-sm max-w-4xl mx-auto shadow-md p-8 rounded-lg"
      >
        <h1 className="text-4xl font-semibold text-slate-700 pb-4">
          Get in touch with us
        </h1>
        <p className="text-lg text-slate text-center pb-10">
          We'd love to hear from you! Reach out for questions, feedback, or
          collaborations.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="w-full">
            <label className="text-black/70" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              required
              disabled={sending}
            />
          </div>
          <div className="w-full">
            <label className="text-black/70" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="email"
              required
              disabled={sending}
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <label className="text-black/70" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
            required
            disabled={sending}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={sending}
          className={`mt-5 h-12 w-40 px-4 rounded-2xl text-white transition active:scale-95 hover:cursor-pointer ${
            sending
              ? "bg-gray-400 cursor-not-allowed text-xl"
              : "bg-[#607f83] hover:bg-[#fbb040] "
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
