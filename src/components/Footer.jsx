import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClasses = ({ isActive }) =>
    `hover:text-[#fbffaa] transition-colors ${
      isActive
        ? "text-[#ffb900] font-semibold flex items-center gap-1 cursor-pointer"
        : "flex items-center gap-1 cursor-pointer"
    }`;

  return (
    <footer className="bg-blue-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Site Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">🎬 MovieHub</h2>
          <p className="text-sm text-gray-300">
            Discover movies, series, and more – all in one place.
          </p>
        </div>

        {/* Navigation Links */}
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

        {/* Developer Credit */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MovieHub. Developed by{" "}
          <span className="text-amber-400 font-semibold">Nikhil</span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
