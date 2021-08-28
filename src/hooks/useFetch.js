import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import API from '../api/index'

function useFetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [token] = useCookies(['token'])

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError()
            const data = await API.getMovies(token['token']).catch(err => setError(err))
            setData(data)
            setLoading(false)
        }

        fetchData()
    }, [])

    return [data, loading, error]
}

export { useFetch }