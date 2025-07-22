import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, BACKDROP_BASE, BASE_URL, IMAGE_BASE } from "./config";


const MovieDetail = () => {
  const { id, mediaType } = useParams(); 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch details");

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, mediaType]);

  if (loading) return <div className="text-gray-400 text-lg p-5">Loading...</div>;
  if (error) return <div className="text-red-500 text-lg p-5">Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="pt-1 min-h-screen text-white">
      {data.backdrop_path && (
        <div
          className="relative h-[450px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${BACKDROP_BASE}${data.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-opacity-60" />
          <div className="absolute bottom-5 left-5">
            <h1 className="text-4xl font-bold">{data.title || data.name}</h1>
            <p className="text-gray-300 text-xl">{data.release_date || data.first_air_date}</p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {data.poster_path && (
          <img
            src={`${IMAGE_BASE}${data.poster_path}`}
            alt={data.title || data.name}
            className="rounded shadow-lg w-full"
          />
        )}

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-6 text-gray-300 text-base">{data.overview}</p>

          <ul className="space-y-2 text-gray-200 text-xl">
            <li>
              <strong>Original Title:</strong> {data.original_title || data.original_name}
            </li>
            <li>
              <strong>Language:</strong> {data.original_language?.toUpperCase()}
            </li>
            <li>
              <strong>Rating:</strong> {data.vote_average} ({data.vote_count} votes)
            </li>
            <li>
              <strong>Popularity:</strong> {Math.round(data.popularity)}
            </li>
            <li>
              <strong>Genres:</strong>{" "}
              {data.genres?.map((g) => g.name).join(", ") || "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
