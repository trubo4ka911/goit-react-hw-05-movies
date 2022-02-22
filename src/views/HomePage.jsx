import { useState, useEffect } from "react";
import MoviesList from "../components/MovieList/MoviesList";
import { getTrending } from "../Api/moviesApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending().then((data) => setMovies(data.results));
  }, []);

  return <MoviesList data={movies} />;
};

export default HomePage;
