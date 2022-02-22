import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./views/HomePage"));
const MovieDetailView = lazy(() =>
  import("./views/MovieDetailView/MovieDetailView")
);
const SearchMovies = lazy(() => import("./views/SearchMovies/SearchMovies"));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={SearchMovies} />
          <Route path="/movies/:movieId" component={MovieDetailView} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
