import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/views/HomePage";
import MovieDetailView from "./components/views/MovieDetailView";

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
