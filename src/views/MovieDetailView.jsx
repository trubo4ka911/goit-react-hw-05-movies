import React from "react";
import { useState, useEffect, lazy } from "react";
import {
  Link,
  useParams,
  useHistory,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { getIdMovies } from "../Api/moviesApi";
import PageHeading from "../components/PageHeading/PageHeading";
import { toast } from "react-toastify";
import styles from "./views.module.css";
const Credit = lazy(() => import("../components/Credit/MovieCreditView"));
const Review = lazy(() => import("../components/Reviews/MovieReviewView"));

const MovieDetailView = () => {
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();
  const history = useHistory();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    getIdMovies(movieId).then(setMovie).catch(toast.error("Not found!"));
  }, [movieId]);

  const onGoBack = () => {
    history.goBack();
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
      <Link className={styles.contentLink} to={`${url}/cast`}>
        Cast
      </Link>
      <Link className={styles.contentLink} to={`${url}/reviews`}>
        Reviews
      </Link>
      <Switch>
        <Route path={`${path}/cast`} component={Credit} />
        <Route path={`${path}/reviews`} component={Review} />
      </Switch>
    </>
  );
};
export default MovieDetailView;
