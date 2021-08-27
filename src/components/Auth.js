import React, { useState, useContext, useEffect } from 'react'
import API from '../api/index'
import { ThemeContext } from '../context/Context'
import { useCookies } from 'react-cookie'

export default function Auth() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['token'])
    const { user, setUser } = useContext(ThemeContext)

    useEffect(() => {
        if (token['token']) window.location.href = '/movies'
    }, [token])

    const login = () => {
        API.login({ username, password })
            .then(resp => setToken('token', resp.token))
            .then(resp => {
                console.log('Pending the stuff with the user data')
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <label htmlFor="username">username</label><br />
            <input
                id="username"
                type="text"
                placeholder="username"
                value={username}
                onChange={e => setUserName(e.target.value)}
            /><br />
            <label htmlFor="password">password</label><br />
            <input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            /><br />
            <button onClick={login}>Login</button>
        </div>
    )
}
