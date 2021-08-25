import React, { useState } from 'react'

export default function MovieForm(props) {

    const movie = props.movie
    const [title, setTitle] = useState(movie.title)
    const [description, setDescription] = useState(movie.description)

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
                    
                </div>
            ) : null}
        </React.Fragment>
    )
}
