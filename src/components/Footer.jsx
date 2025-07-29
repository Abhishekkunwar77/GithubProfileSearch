import React from "react";
import logo from "../assets/GitpeekLogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 w-full" />

      <footer className="flex flex-col items-center justify-center w-full py-6 text-black">
        {/* Logo */}
        <Link to="/" className="mb-3">
          <img
            src={logo}
            alt="Gitpeek"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Copyright */}
        <p className="text-lg text-center">
          © {new Date().getFullYear()} Gitpeek. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-3">
          <a
            target="_blank"
            href="https://www.facebook.com/nishu.kunwar.31"
            aria-label="Facebook"
            className="text-gray-600 hover:text-[#1877F2] transition duration-300"
          >
            <FaFacebook size={26} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/abhishek_kunwar23/"
            aria-label="Instagram"
            className="text-gray-600 hover:text-[#E1306C] transition duration-300"
          >
            <FaInstagram size={26} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-kunwar55/"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-[#0A66C2] transition duration-300"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            target="_blank"
            href="https://x.com/kunwar_abh29597"
            aria-label="Twitter"
            className="text-gray-600 hover:text-[#1DA1F2] transition duration-300"
          >
            <FaTwitter size={26} />
          </a>
          <a
            target="_blank"
            href="https://github.com/Abhishekkunwar77"
            aria-label="GitHub"
            className="text-gray-600 hover:text-black transition duration-300"
          >
            <FaGithub size={26} />
          </a>
        </div>
      </footer>
    </>
  );
}
