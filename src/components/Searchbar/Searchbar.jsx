import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import styles from "./Searchbar.module.css";
import { FcSearch } from "react-icons/fc";
import MoviesList from "../views/MoviesList";
import { getSearch } from "../Api/moviesApi";

const Searchbar = () => {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState([]);

  const handleNameChange = (e) => {
    setMovieName(e.target.value.toString().toLowerCase());
  };
  const handleSubmit = (e) => {
    if (movieName.trim() === "") {
      return toast.error("Write name of movie for searching!");
    }

    movieName && getSearch(movieName).then((data) => setData(data.results));
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

      {data && <MoviesList data={data} />}
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
