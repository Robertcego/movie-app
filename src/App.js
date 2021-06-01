import React from "react";
import Favorites from "./components/Favorites/Favorites";
import Search from "./components/Search/Search";
import NavBar from "./components/Nav/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Search} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
    </div>
  );
}

export default App;
