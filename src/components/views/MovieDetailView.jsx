import { useState, useEffect } from "react";
import {
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { getIdMovies, getCast } from "../Api/moviesApi";
import PageHeading from "../PageHeading/PageHeading";
import MovieCreditView from "./MovieCreditView";

const MovieDetailView = () => {
  const [movie, setMovie] = useState("");
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    getIdMovies(movieId).then(setMovie);
  }, [movieId]);

  useEffect(() => {
    getCast(movieId).then(setCredits);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <PageHeading text={movie.title} />
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      <hr />
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>Vote average:</h3>
          <p>{movie.vote_average}</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul>
            {movie &&
              movie.genres.map((item) => <li key={item.id}>{item.name}</li>)}
          </ul>
          <h3>Additional information:</h3>
        </>
      )}
      <hr />
      <Route path="/movies/:movieId">
        {credits && <MovieCreditView credits={credits} />}
      </Route>
      {/* <Link to="cast" state={{ from: location.state.from }}>
          Cast
        </Link> */}
    </>
  );
};
export default MovieDetailView;
