import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import TrailerMovie from './components/TrailerMovie';

import TLK from './images/The Lion King.jpg';
import MK from './images/Mortal Kombat.jpg';
import CI from './images/Central Intelligence.jpg';

function App() {
  const [movie, setMovie] = useState([
    {title: "The Lion King",
    description: "Animation",
    posterUrl: TLK,
    rating: 5,
    trailer: "https://www.youtube.com/embed/lFzVJEksoDY"},

    {title: "Mortal Kombat",
    description: "Action",
    posterUrl: MK,
    rating: 4,
    trailer: "https://www.youtube.com/embed/jBa_aHwCbC4"},

    {title: "Central Intelligence",
    description: "Action-Comedy",
    posterUrl: CI,
    rating: 4.5,
    trailer: "https://www.youtube.com/embed/MxEw3elSJ8M"},
]);

const addMovieToList = (movie) => {
  setMovie((previous) => [...previous, movie])
  } 

const [filteredInput, setFilteredInput] = useState({title: "", rating: ""})

const handleMovieFilter = (filterType, filterValue) => (
  setFilteredInput({...filteredInput, [filterType]:filterValue})
)

const filteredMovies = movie.filter((oneMovie) => (
  oneMovie.title.toLowerCase().includes(filteredInput.title.toLowerCase()) && oneMovie.rating.toString().includes(filteredInput.rating)
))

  return (
      <Router>
    <div className="App">
      <header><b className='movietitle'>Movie.net</b><Filter handleFilter={handleMovieFilter}/></header>
        <Routes>
          <Route path="/" exact element={<MovieList movies={filteredMovies}/>}>
          </Route>
          <Route path="/movies/:title" element={<TrailerMovie movies={movie} />}>
          </Route>
        </Routes>
        <AddMovie addMovie={addMovieToList}/>
    </div>
      </Router>
  );
}

export default App;