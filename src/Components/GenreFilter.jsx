import React from "react";

export const GenreFilter = ({ handleGenreChange }) => {
  return (
    <select
      onChange={(e) => handleGenreChange(e.target.value)}
      className="bg-gray-600 p-2 bg-opacity-60 backdrop-blur-md text-white border rounded"
    >
      <option value="">All Genres</option>
      <option value="action">Action</option>
      <option value="adventure">Adventure</option>
      <option value="comedy">Comedy</option>
      <option value="drama">Drama</option>
      <option value="horror">Horror</option>
      <option value="romance">Romance</option>
      <option value="thriller">Thriller</option>
      <option value="animation">Animation</option>
      <option value="crime">Crime</option>
    </select>
  );
};

export default GenreFilter;
