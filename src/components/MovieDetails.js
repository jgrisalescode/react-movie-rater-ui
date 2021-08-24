import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function MovieDetails(props) {

    const [highLighted, setHighLighted] = useState(-1)

    const movie = props.movie

    const highLightRate = high => evt => {
        setHighLighted(high)
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
