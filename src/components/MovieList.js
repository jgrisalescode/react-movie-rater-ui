import React, { useContext } from 'react'
import { ThemeContext } from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function MovieList(props) {

    const { user, setUser } = useContext(ThemeContext)

    const movieClicked = movie => evt => {
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        // Notyfing our patent
        props.editClicked(movie)
    }

    const removeClicked = movie => {
        props.removeClicked(movie)
    }

    return (
        <div>
            {props.movies && props.movies.map(movie => {
                return (
                    <div key={movie.id} className="movie-item">
                        <h2 onClick={movieClicked(movie)}> {movie.title}</h2>
                        <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)} />
                        <FontAwesomeIcon icon={faTrash} onClick={() => removeClicked(movie)} />
                    </div>
                )
            })}
        </div>
    )
}
