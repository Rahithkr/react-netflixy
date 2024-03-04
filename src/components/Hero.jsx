import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../Services/MovieServices";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(endpoints.popular)
      .then((response) => {
        const movie = response.data.results;
        const randomMovie = movie[Math.floor(Math.random() * movie.length)];

        setMovie(randomMovie);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  }, []);
  const { title, backdrop_path, release_date, overview } = movie;

  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };
  if (!movie)
    return (
      <>
        <p>fetching movie...</p>
      </>
    );

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div
          className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black
      "
        />
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt={title}
        />

        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border bg-gray-300 text-black py-2 px-5 ">
              play
            </button>
            <button className="capitalize border bg-grey-300 py-2 px-5 ml-4 ">
              watch later
            </button>
          </div>
          <p className="text-grey-400 text-sm">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-grey-200">
            {truncate(overview, 165)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;