import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const linkClasses = ({ isActive }) =>
    `hover:text-[#fbffaa] transition-colors ${
      isActive
        ? "text-[#ffb900] font-semibold flex items-center gap-1 cursor-pointer"
        : "flex items-center gap-1 cursor-pointer"
    }`;

  return (
    <footer className="bg-blue-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">🎬 MovieHub</h2>
          <p className="text-sm text-gray-300">
            Discover movies, series, and more – all in one place.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 font-medium text-base">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/search" className={linkClasses}>
            Search
          </NavLink>
          <NavLink to="/movies" className={linkClasses}>
            Movies
          </NavLink>
          <NavLink to="/series" className={linkClasses}>
            Series
          </NavLink>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} MovieHub. Developed by{" "}
            <span className="text-amber-400 font-semibold">
              Nikhil Kirodiwal
            </span>
            .
          </p>

          <div className="flex justify-center items-center gap-4 mt-2 text-2xl">
            <a
              href="https://github.com/nikhilkirodiwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/nikhil-kirodiwal-659933296"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/nikhil._saini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
