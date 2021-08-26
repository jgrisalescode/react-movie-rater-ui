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

  const updatedMovie = movie => {
    // Refetch the movies (my solution)
    getMovies()
    // Instructor had updated the movies array instead refetch the database
    // const newMovies = movies.map(mov => {
    //   if (mov.id === movie.id) {
    //     return movie
    //   }
    //   return mov
    // })
    // setMovies(newMovies)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked} />
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editedMovie ? <MovieForm movie={editedMovie} updatedMovie={updatedMovie} /> : null}
      </div>
    </div>
  );
}

export default App;
