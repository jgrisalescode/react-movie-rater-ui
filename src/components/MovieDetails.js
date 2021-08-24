import React from 'react'

export default function MovieDetails(props) {
    return (
        <div>
            {props.movie ? (
                <React.Fragment>
                    <h2>{props.movie.title}</h2>
                    <p>{props.movie.description}</p>
                </React.Fragment>
            ) : (
                <p>No movie selected</p>
            )}
        </div>
    )
}
