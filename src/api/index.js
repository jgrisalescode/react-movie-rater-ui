const TOKEN = 'd85d5f44aa2fc29c458fa234d3042a14845c27a8'

export default class API {
    static updateMovie(movie, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}` // Harcoded for now
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static createMovie(body) {
        return fetch(`http://127.0.0.1:8000/api/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}` // Harcoded for now
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static getMovies() {
        return fetch("http://127.0.0.1:8000/api/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}` // Harcoded for now
            }
        }).then(resp => resp.json())
    }
}