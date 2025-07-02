import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white px-4">
      <div className="max-w-[1200px] mx-auto border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 pt-2 text-sm text-gray-400">
        <div className="flex gap-6">
          <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-green-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-green-500 transition">Sitemap</a>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="mailto:saammagar00@gmail.com"
            className="hover:text-green-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/notKuina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/notkuina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/samjhana-gharti-magar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-xs text-yellow-300 text-center md:text-right">
          © 2025 Samjhana. All Rights Reserved. Made with passion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
