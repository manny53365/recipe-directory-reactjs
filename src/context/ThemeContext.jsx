import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'COLOR_CHANGE':
            return {...state, color: action.payload }

        case 'CHANGE_MODE':
            return {...state, mode: action.payload}

        default:
            return state
    }
}

export function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(themeReducer, {color: 'blue', mode: 'dark'})

    const changeColor = (color) => {
        dispatch({type: 'COLOR_CHANGE', payload: color})
    }

    const changeMode = mode => {
        dispatch({type: 'CHANGE_MODE', payload: mode})
    }

    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}