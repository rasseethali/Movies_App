import React, { useContext, useState } from "react";
import { WatchListContext } from "../WatchListContext/WatchListContext";
import GenreFilter from "../Components/GenreFilter";
import Moviecard from "../Components/Moviecard";

const Watchlist = () => {
  const { watchlist } = useContext(WatchListContext);

  // Add state for search query
  const [query, setQuery] = useState("");

  // Filter movies based on search query
  const filteredMovies = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="pt-24 px-4  justify-center  min-h-screen text-white">
      <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="w-3/4 md:w-1/2 border border-gray-700 fixed z-10
          bg-gray-900 bg-opacity-60 backdrop-blur-md 
          p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        
      <h1 className="text-3xl mb-6">Your Watchlist</h1>
      {filteredMovies.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
