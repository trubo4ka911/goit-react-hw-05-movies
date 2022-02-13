import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./components/views/HomePage"));
const MovieDetailView = lazy(() =>
  import("./components/views/MovieDetailView")
);
const Credit = lazy(() => import("./components/views/MovieCreditView"));
const Searchbar = lazy(() => import("./components/Searchbar/Searchbar"));
const Review = lazy(() => import("./components/views/MovieReviewView"));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={Searchbar} />
          <Route path="/movies/:movieId" exact component={MovieDetailView} />
          <Route path="/movies/:movieId/cast" exact>
            <MovieDetailView>
              <Credit />
            </MovieDetailView>
          </Route>
          <Route path="/movies/:movieId/reviews">
            <MovieDetailView>
              <Review />
            </MovieDetailView>
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
