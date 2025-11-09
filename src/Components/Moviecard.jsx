import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../WatchListContext/WatchListContext";

const Moviecard = ({ movie }) => {
  const { watchlist, toggleWatchlist } = useContext(WatchListContext);

  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-950 rounded-xl shadow-lg relative p-6 w-[250px] sm:w-[300px] text-center text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-full h-[380px] object-cover"
      />
      <h2 className="text-lg font-semibold mt-3">{movie.title}</h2>

      <button
        onClick={() => toggleWatchlist(movie)}
        className="absolute right-2 top-2 text-red-500 text-2xl hover:scale-110 transition-transform duration-200"
      >
        {isInWatchlist ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Moviecard;
