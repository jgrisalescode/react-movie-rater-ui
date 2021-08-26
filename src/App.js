import React, { useState, useEffect } from 'react'
import './App.css';
import API from './api/index'
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    API.getMovies()
      .then(resp => setMovies(resp))
      .catch(error => console.log(error))
  }

  const loadMovie = movie => {
    setSelectedMovie(movie)
    setEditedMovie(null)
  }

  const editClicked = movie => {
    setEditedMovie(movie)
    setSelectedMovie(null)
  }

  const newMovie = () => {
    setEditedMovie({ title: '', description: '' })
    setSelectedMovie(null)
  }

  const deleteMovie = movie => {
    API.deleteMovie(movie)
      .then(() => getMovies())
      .then(() => setSelectedMovie(null))
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <div>
          <MovieList
            movies={movies}
            movieClicked={loadMovie}
            editClicked={editClicked}
            removeClicked={deleteMovie}
          />
          <button onClick={newMovie}>New movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editedMovie ? <MovieForm movie={editedMovie} updatedMovie={getMovies} newMovie={getMovies} /> : null}
      </div>
    </div>
  );
}

export default App;
