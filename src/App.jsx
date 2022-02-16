import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./views/HomePage"));
const MovieDetailView = lazy(() => import("./views/MovieDetailView"));
const Credit = lazy(() => import("./components/Credit/MovieCreditView"));
const Searchbar = lazy(() => import("./components/Searchbar/Searchbar"));
const Review = lazy(() => import("./components/Reviews/MovieReviewView"));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={Searchbar} />
          <Route path="/movies/:movieId" exact component={MovieDetailView} />

          {/* <Route path="/movies/:movieId" index element={<MovieDetailView/>} />
<Route path='cast' element={<Credit/>}/>
  <Route path='reviews' element={<Review/>}/> */}

          {/* <Route component={MovieDetailView} path="/movies/:movieId">
            <Route component={Credit} path="/cast"></Route>
            <Route component={Review} path="/reviews"></Route>
        </Route> */}

          {/* <Switch>
<Route path="/movies/:movieId" exact component={MovieDetailView} />
<Route path="/cast"  component={Credit} />
<Route path="/reviews"  component={Review} />
</Switch> */}

          {/* <Route path="/movies/:movieId" exact component={MovieDetailView} />
          <Redirect path="/movies/:movieId/cast" exact>
            <MovieDetailView>
              <Credit />
            </MovieDetailView>
          </Redirect>
          <Redirect path="/movies/:movieId/reviews">
            <MovieDetailView>
              <Review />
            </MovieDetailView>
          </Redirect> */}
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
