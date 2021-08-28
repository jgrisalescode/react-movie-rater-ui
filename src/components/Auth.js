import React, { useState, useContext, useEffect } from 'react'
import API from '../api/index'
import { ThemeContext } from '../context/Context'
import { useCookies } from 'react-cookie'

export default function Auth() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoginView, setIsLoginView] = useState(true)
    const [token, setToken] = useCookies(['token'])
    const { user, setUser } = useContext(ThemeContext)

    useEffect(() => {
        if (token['token']) window.location.href = '/movies'
    }, [token, user])

    const login = () => {
        API.login({ username, password })
            .then(resp => setToken('token', resp.token))
            .catch(error => console.log(error))
    }

    const register = () => {
        API.register({ username, password })
            .then(() => login())
            .catch(error => console.log(error))
    }

    const isDisabled = username.length === 0 || password.length === 0

    return (
        <div className="App">
            <header className="App-header">
                {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
            </header>
            <div className="login-container">
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
                {
                    isLoginView ?
                        <button onClick={login} disabled={isDisabled}>Login</button> :
                        <button onClick={register} disabled={isDisabled}>Register</button>
                }
                {
                    isLoginView ?
                        <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here!</p> :
                        <p onClick={() => setIsLoginView(true)}>You have an account? Login here!</p>
                }
            </div>

        </div>
    )
}
