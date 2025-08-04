import React from 'react';
import Favorites from './components/Favorites/Favorites';
import NavBar from './components/Nav/NavBar';
import { Routes, Route } from 'react-router-dom';
import Movie from './components/Movie/Movie';
import Movies from './components/Movie/Movies';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
