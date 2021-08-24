import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token d85d5f44aa2fc29c458fa234d3042a14845c27a8' // Harcoded for now
      }
    })
      .then(resp => resp.json())
      .then(resp => setMovies(resp))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <div>
          {movies.map(movie => {
            return <h2>{movie.title}</h2>
          })}
        </div>
        <div>Movie detail</div>
      </div>
    </div>
  );
}

export default App;
