import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export default function GeneralContext(props) {

    const [token, setToken] = useState('')

    return (
        <ThemeContext.Provider value={{ token, setToken }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
