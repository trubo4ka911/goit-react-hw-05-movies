import React, { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import styles from "./PageHeading.module.css";
import { FcSearch } from "react-icons/fc";
import MoviesList from "../views/MoviesList";

const Searchbar = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const onSearch = () => {
    navigate(`${location.pathname}?query=${movieName}`);
  };

  const handleNameChange = (e) => {
    setMovieName(e.target.value.toString().toLowerCase());
  };
  const handleSubmit = (e) => {
    if (movieName.trim() === "") {
      return toast.error("Write name of movie for searching!");
    }

    onSubmit(movieName);
    setMovieName("");
    e.preventDefault();
  };

  return (
    <header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit" onClick={onSearch}>
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
          placeholder="Search movir"
        />
      </form>
      <Outlet />
      {movieName && <MoviesList movieName={movieName} />}
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
