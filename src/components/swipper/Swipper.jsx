import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Swipper.css";
import { NavLink } from "react-router-dom";
import { API_KEY, BASE_URL, IMAGE_BASE } from "../config";

export default function Swipper() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) setMovies(data.results);
      })
      .catch(console.error);
  }, []);

  if (movies.length === 0) {
    return <div>Loading top‑rated movies…</div>;
  }

  return (
    <div className="slider-container">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        pagination
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <NavLink to={`/details/movie/${movie.id}`}>
              <img
                src={`${IMAGE_BASE}${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-title">{movie.title}</div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
