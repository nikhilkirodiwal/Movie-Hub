import { IoHomeOutline } from "react-icons/io5";
import { MdImageSearch } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function HamburgerMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 cursor-pointer transition-colors ${
      isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-100"
    }`;

  return (
    <aside
      className="absolute top-8 right-5 p-4 w-72 bg-zinc-950 text-white sm:hidden z-50 rounded-lg shadow-xl"
      role="dialog"
      aria-label="Mobile navigation menu"
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <AiOutlineClose />
      </button>

      <ul className="flex flex-col gap-6 p-5 mt-10 text-lg">
        <li>
          <NavLink to="/" className={linkClasses} onClick={closeMenu}>
            <IoHomeOutline />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={linkClasses} onClick={closeMenu}>
            <MdImageSearch />
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={linkClasses} onClick={closeMenu}>
            <BiCameraMovie />
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/series" className={linkClasses} onClick={closeMenu}>
            <RiMovie2Line />
            Series
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default HamburgerMenu;