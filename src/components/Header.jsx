import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/movie_logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { MdImageSearch } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { RiMovie2AiLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `hover:text-[#fbffaa] transition-colors ${
      isActive
        ? "text-[#ffb900] font-semibold flex items-center gap-1 cursor-pointer"
        : "flex items-center gap-1 cursor-pointer"
    }`;

  return (
    <header className="pt-5 flex gap-5 flex-wrap items-center shadow-md relative">
      <NavLink to="/">
        <img
          className="w-20 md:w-24 rounded-2xl cursor-pointer"
          src={logo}
          alt="Movie App Logo"
        />
      </NavLink>

      <nav className="flex-1 flex justify-end sm:justify-center relative">
        {/* 🍔 Hamburger Icon (Mobile Only) */}
        <div
          className="text-3xl cursor-pointer sm:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <GiHamburgerMenu />
        </div>

        {/* 📱 Hamburger Menu (Controlled) */}
        <HamburgerMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />

        {/* 🖥️ Desktop Nav */}
        <ul className="hidden sm:flex flex-wrap gap-8 2md:gap-10 3md:gap-15 lg:gap-20 text-lg md:text-xl items-center">
          <li>
            <NavLink to="/" className={linkClasses}>
              <IoHomeOutline />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={linkClasses}>
              <MdImageSearch />
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={linkClasses}>
              <BiCameraMovie />
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/series" className={linkClasses}>
              <RiMovie2AiLine />
              Series
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
