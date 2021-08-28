import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import API from '../api/index'

export default function MovieForm(props) {

    const movie = props.movie
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['token'])

    useEffect(() => {
        setTitle(movie.title)
        setDescription(movie.description)
    }, [movie])

    const updateClicked = () => {
        API.updateMovie(movie, { title, description }, token['token'])
            .then(resp => props.updatedMovie(resp))
            .catch(error => console.log(error))
    }

    const createClicked = () => {
        API.createMovie({ title, description }, token['token'])
            .then(resp => props.newMovie(resp))
            .catch(error => console.log(error))
    }

    const isDisabled = title.length === 0 || description.length === 0

    return (
        <React.Fragment>
            {movie ? (
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input
                        id="title"
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    /><br />
                    <label htmlFor="description">Description</label><br />
                    <textarea
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}>
                    </textarea><br />
                    {
                        movie.id ?
                            <button onClick={updateClicked} disabled={isDisabled}>Update</button> :
                            <button onClick={createClicked} disabled={isDisabled}>Create</button>
                    }
                </div>
            ) : null}
        </React.Fragment>
    )
}
