import React, { useState, useEffect } from "react";
import Moviecard from "../Components/Moviecard.jsx";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []))
      .catch((err) => console.error("Error fetching movies:", err));
  };

  useEffect(() => {
    if (query.trim() === "") {
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=a64456fb54b63fad00a811baa92a85ae&language=en-US&page=${page}`
      );
    }
  }, [page, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=a64456fb54b63fad00a811baa92a85ae&language=en-US&page=1`
      );
    } else {
      fetchMovies(
        `https://api.themoviedb.org/3/search/movie?api_key=a64456fb54b63fad00a811baa92a85ae&query=${query}&language=en-US&page=1`
      );
    }
  };

  return (
    <div className="pt-24 px-4 min-h-screen bg-white">
      <form
        onSubmit={handleSearch}
        className="flex justify-center mb-8 gap-2  flex-wrap"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="w-3/4 md:w-1/2 border border-gray-700 fixed z-10
          bg-gray-900 bg-opacity-60 backdrop-blur-md 
          p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        
      </form>

      <div
        className="movies-container 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 p-4 place-items-center justify-center text-center"
      >
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-gray-600 text-lg">No movies found...</p>
        )}
      </div>

      <div className="pagination-container flex justify-between mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="text-white p-2 bg-gray-700 rounded disabled:opacity-50"
        >
          PREV
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="text-white p-2 bg-gray-700 rounded"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Home;
