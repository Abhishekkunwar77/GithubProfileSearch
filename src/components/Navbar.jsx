import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/GitpeekLogo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between border-b border-gray-200 text-gray-700">
      {/* Logo on the left */}
      <Link to="/">
        <img src={Logo} alt="GitHub Finder Logo" className="h-10" />
      </Link>

      {/* Contact button, responsive size */}
      <NavLink
        to="/contact"
        className="text-white sm:text-xl w-20 sm:w-36 md:w-30 h-9 sm:h-10 md:h-11 flex items-center justify-center rounded-2xl  bg-[#607f83] hover:bg-[#fbb040] active:scale-95 transition-all text-lg"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
