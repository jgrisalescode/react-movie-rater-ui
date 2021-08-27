import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export default function GeneralContext(props) {

    const [user, setUser] = useState(null)

    return (
        <ThemeContext.Provider value={{ user, setUser }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
