import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function MovieDetails(props) {
    return (
        <div>
            {props.movie ? (
                <React.Fragment>
                    <h2>{props.movie.title}</h2>
                    <p>{props.movie.description}</p>
                    <FontAwesomeIcon icon={faStar} />
                </React.Fragment>
            ) : (
                <p>No movie selected</p>
            )}
        </div>
    )
}
