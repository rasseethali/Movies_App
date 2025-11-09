import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../WatchListContext/WatchListContext";

const Navbar = () => {
  const { watchlist } = useContext(WatchListContext);

  return (
    <nav className="bg-blue-950 flex justify-between fixed w-full top-0 left-0 p-4 z-10">
      <Link to="/" className="text-white text-2xl font-bold">
        Movie App
      </Link>
      <Link to="/watchlist" className="text-white text-xl font-semibold">
        Watchlist ({watchlist.length})
      </Link>
    </nav>
  );
};

export default Navbar;
