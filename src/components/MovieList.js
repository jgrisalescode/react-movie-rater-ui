import React from 'react'

export default function MovieList(props) {
    return (
        <div>
            {props.movies && props.movies.map(movie => {
                return <h2>{movie.title}</h2>
            })}
        </div>
    )
}
