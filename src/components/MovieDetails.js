import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function MovieDetails(props) {

    const [highLighted, setHighLighted] = useState(-1)

    const movie = props.movie

    const highLightRate = high => evt => {
        setHighLighted(high)
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d85d5f44aa2fc29c458fa234d3042a14845c27a8' // Harcoded for now
            },
            body: JSON.stringify({
                stars: rate + 1
            })
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
            {movie ? (
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 0 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 1 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 2 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 3 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 4 ? 'orange' : ''} />
                    ({movie.no_of_ratings})
                    <div className="rate-container">
                        <h2>Rate it</h2>
                        {[...Array(5)].map((element, index) => {
                            return <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                className={highLighted > index - 1 ? 'aqua' : ''}
                                onMouseEnter={highLightRate(index)}
                                onMouseLeave={highLightRate(-1)}
                                onClick={rateClicked(index)}
                            />
                        })}
                    </div>
                </div>
            ) : (
                <p>No movie selected</p>
            )}
        </React.Fragment>
    )
}
