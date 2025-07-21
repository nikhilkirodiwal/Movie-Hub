import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMAGE_BASE } from "./config";

const genreMap = {
  action: 28,
  kids: 10751,
  crime: 80,
  horror: 27,
  animation: 16,
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const genreId = genreMap[categoryName?.toLowerCase()];

  useEffect(() => {
    if (!genreId) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genreId]);

  if (!genreId) {
    return <div className="p-6 text-red-500 text-lg">Invalid category</div>;
  }

  if (loading) {
    return <div className="p-6 text-gray-400 text-lg">Loading movies...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4 capitalize">
        {categoryName} Movies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <NavLink
            to={`/details/movie/${movie.id}`}
            key={movie.id}
            className="bg-gray-800 text-white rounded shadow overflow-hidden hover:scale-105 transition-transform"
          >
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE}${movie.poster_path}`}
                alt={movie.title}
                className="w-full object-cover h-80"
              />
            ) : (
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                No Image
              </div>
            )}
            <div className="p-2 text-center text-sm font-semibold">
              {movie.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
