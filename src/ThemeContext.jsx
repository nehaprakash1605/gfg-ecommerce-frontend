import React, { createContext, useState } from "react"

export let ThemeStore = createContext(null); //global store

let ThemeContext = ({children}) => {

    let [theme, setTheme] = useState("light");

    return(
        <ThemeStore.Provider value={{theme, setTheme}}>
            {children}
        </ThemeStore.Provider>
    )

}

export default ThemeContext