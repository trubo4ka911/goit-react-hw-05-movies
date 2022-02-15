import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import { getIdMovies, getCast } from "../Api/moviesApi";
import PageHeading from "../components/PageHeading/PageHeading";
import { toast } from "react-toastify";
import styles from "./views.module.css";

const MovieDetailView = (props) => {
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getIdMovies(movieId).then(setMovie).catch(toast.error("Not found!"));
  }, [movieId]);

  const onGoBack = () => {
    history.goBack();
    // history.push(location.state?.from ?? "/")
  };

  return (
    <>
      <PageHeading text={movie.title} />
      <button className={styles.goBack} type="button" onClick={onGoBack}>
        Go back
      </button>
      <hr />
      {movie && (
        <>
          <div className={styles.content}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h3>Vote average:</h3>
              <p>{movie.vote_average}</p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              <ul>
                {movie &&
                  movie.genres.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
              </ul>
            </div>
          </div>
          <h3 className={styles.info}>Additional information:</h3>
        </>
      )}
      <hr />
      <Link className={styles.contentLink} to={`/movies/${movieId}/cast`}>
        Cast
      </Link>
      <Link className={styles.contentLink} to={`/movies/${movieId}/reviews`}>
        Reviews
      </Link>
      {props.children}
    </>
  );
};
export default MovieDetailView;
