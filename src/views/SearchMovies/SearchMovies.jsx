import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import styles from "./SearchMovies.module.css";
import { FcSearch } from "react-icons/fc";
import MoviesList from "../../components/MovieList/MoviesList";
import { getSearch } from "../../Api/moviesApi";

const SearchMovies = () => {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState([]);

  const history = useHistory();
  const { search } = useLocation();
  const query = search ? search.slice(7) : "";

  useEffect(() => {
    if (query) {
      getSearch(query)
        .then((data) => setData(data.results))
        .catch(toast.error("Not found!"));
    } else if (data) {
      setData([]);
    }
  }, [query]);

  const handleNameChange = (e) => {
    setMovieName(e.target.value.toString().toLowerCase());
  };
  const handleSubmit = (e) => {
    if (movieName.trim() === "") {
      return toast.error("Write name of movie for searching!");
    }

    history.push(`/movies?query=${movieName}`);

    setMovieName("");
    e.preventDefault();
  };

  return (
    <header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.btn} type="submit">
          <FcSearch />
        </button>
        <input
          className={styles.input}
          type="text"
          name="movieName"
          value={movieName}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      <MoviesList data={data} />
    </header>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchMovies;
