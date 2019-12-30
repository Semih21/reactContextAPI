import React, { useContext } from "react";
import { MovieContext } from "./MovieProvider";
function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>Nav</h1>
      <h3>The number of Movies:{movies.length}</h3>
    </div>
  );
}

export default Nav;
