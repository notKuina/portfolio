"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_z43kakt", "template_it2s9kk", form.current, "-wwrr9tEC2EWvmpdw")
      .then(() => {
        setSuccessMessage("Thanks for reaching out! I will get back to you soon.");
        e.target.reset();
        setLoading(false);
      })
      .catch(() => {
        setSuccessMessage("Oops! Something went wrong. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <main className="bg-black text-white scroll-smooth">

      <section id="contact" className="pt-20 pb-10 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col justify-between items-center relative">
            <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">Contact</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <div>
                <h3 className="text-3xl text-yellow-300 mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-8">
                  Feel free to reach out if you'd like to collaborate — you’re just a few clicks away!
                </p>

                {successMessage && (
                  <p className="text-green-500 mb-4" role="alert">{successMessage}</p>
                )}

                <form ref={form} className="flex flex-col gap-4" noValidate onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="from_name"
                    id="fromName"
                    placeholder="Your Name"
                    required
                    className="h-12 rounded-lg bg-gray-200 px-4 text-black"
                    aria-label="Your Name"
                    disabled={loading}
                  />
                  <input
                    type="email"
                    name="from_email"
                    id="fromEmail"
                    placeholder="Your Email"
                    required
                    className="h-12 rounded-lg bg-gray-200 px-4 text-black"
                    aria-label="Your Email"
                    disabled={loading}
                  />
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    placeholder="Your Message"
                    required
                    className="rounded-lg bg-gray-200 p-4 text-black resize-none"
                    aria-label="Your Message"
                    disabled={loading}
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-12 flex items-center justify-center border border-green-700 rounded-full text-lg text-white transition-all duration-500 cursor-pointer ${
                      loading ? "bg-green-700 opacity-70 cursor-not-allowed" : "hover:bg-green-700"
                    }`}
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <img src="/images/email.png" alt="Contact" className="w-60 h-60 object-contain mb-8" />

                <div className="flex flex-col items-center gap-3">
                  <a
                    href="mailto:saammagar00@gmail.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition"
                  >
                    <FaEnvelope />
                    <span>saammagar00@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/samjhana-gharti-magar"
                    className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition"
                  >
                    <FaLinkedin />
                    <span>Samjhana Gharti Magar</span>
                  </a>

                  <a
                    href="https://github.com/notKuina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition"
                  >
                    <FaGithub />
                    <span>github.com/notKuina</span>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition"
                  >
                    <FaPhone />
                    <span>+123 456 7890</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
