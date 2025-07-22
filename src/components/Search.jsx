import { useState, useEffect } from "react";
import Category from "./Category";
import { API_KEY, BASE_URL, IMAGE_BASE } from "./config";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
          )}&include_adult=true`
        );
        const data = await response.json();
        if (data.results) {
          setResults(data.results);
        }
      } catch (err) {
        setError("Failed to fetch movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchData, 500);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="pt-10 px-4">
      <label className="text-2xl block text-center font-bold mb-4 text-white">
        Search Movies
      </label>
      <input
        type="text"
        placeholder="Search for movies..."
        className="w-full md:w-1/2 p-2 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 block mx-auto"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query.trim() === "" ? (
        <Category />
      ) : loading ? (
        <p className="text-center text-white mt-6">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-400 mt-6">{error}</p>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {results.map(
            (movie) =>
              movie.poster_path && (
                <NavLink to={`/details/movie/${movie.id}`} key={movie.id}>
                  <div
                    key={movie.id}
                    className="bg-gray-900 rounded shadow-lg overflow-hidden"
                  >
                    <img
                      src={`${IMAGE_BASE}${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full"
                    />
                    <div className="p-3 text-white text-center">
                      <h3 className="text-md font-bold">{movie.title}</h3>
                      <p className="text-sm text-gray-400">
                        {movie.release_date || "Unknown Date"}
                      </p>
                    </div>
                  </div>
                </NavLink>
              )
          )}
        </div>
      ) : (
        <p className="text-center text-white mt-6">No results found.</p>
      )}
    </div>
  );
};

export default Search;
