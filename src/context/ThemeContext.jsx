import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'COLOR_CHANGE':
            return {...state, color: action.payload }

        default:
            return state
    }
}

export function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(themeReducer, {color: 'blue'})

    const changeColor = (color) => {
        dispatch({type: 'COLOR_CHANGE', payload: color})
    }

    return (
        <ThemeContext.Provider value={{...state, changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}