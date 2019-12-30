import React from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieProvider";
import { useContext } from "react";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  console.log("movies:", movies);
  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
