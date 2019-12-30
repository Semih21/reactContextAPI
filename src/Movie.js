import React from "react";

function Movie({ movie }) {
  return (
    <div>
      <h3>{movie.name}</h3>
      <h5>Price:{movie.price}</h5>
    </div>
  );
}

export default Movie;
