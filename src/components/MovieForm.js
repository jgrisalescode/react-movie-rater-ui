import React from 'react'

export default function MovieForm(props) {

    const movie = props.movie

    return (
        <div>
            <h1>{movie && movie.title} edit</h1>
        </div>
    )
}
