import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { API_KEY, BASE_URL, IMAGE_BASE } from "./config";

const Series = ({ limit, carousel = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch movies");
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const displayedMovies = limit ? movies.slice(0, limit) : movies;

  return (
    <div className="py-5">
      <h2 className="flex justify-between items-center mb-4 text-white text-xl font-bold">
        <p className="text-3xl font-bold text-white">Popular TV Series</p>
        {limit && movies.length > limit && (
          <NavLink
            to="/series"
            className="px-4 py-2 text-blue-400 hover:underline text-sm border"
          >
            See All
          </NavLink>
        )}
      </h2>

      {loading && <div className="text-gray-400 text-lg">Loading...</div>}
      {error && <div className="text-red-500 text-lg">Error: {error}</div>}

      {!loading && !error && (
        <>
          {carousel ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {displayedMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <NavLink to={`/details/tv/${movie.id}`}>
                    <div className="bg-gray-800 text-white rounded shadow overflow-hidden">
                      {movie.poster_path ? (
                        <img
                          src={`${IMAGE_BASE}${movie.poster_path}`}
                          alt={movie.name}
                          className="w-full h-80 object-cover"
                        />
                      ) : (
                        <div className="h-64 bg-gray-700 flex items-center justify-center">
                          No Image
                        </div>
                      )}
                      <div className="p-2 text-center text-base font-semibold">
                        {movie.name}
                      </div>
                    </div>
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {displayedMovies.map((movie) => (
                <NavLink to={`/details/tv/${movie.id}`}>
                  <div
                    key={movie.id}
                    className="max-w-80 bg-gray-800 text-white rounded shadow overflow-hidden"
                  >
                    {movie.poster_path ? (
                      <img
                        src={`${IMAGE_BASE}${movie.poster_path}`}
                        alt={movie.name}
                        className="w-full object-cover"
                      />
                    ) : (
                      <div className="h-64 bg-gray-700 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                    <div className="p-2 text-center text-base font-semibold">
                      {movie.name}
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Series;
