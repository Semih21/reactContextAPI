import React from "react";
import { MovieProvider } from "./MovieProvider";
import "./App.css";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import Nav from "./Nav";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
