import { createContext, useContext } from "react";

// By default we can give values while creating the context as object
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{}, //functions
    lightTheme:()=>{}
})


export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){ //creating a hook to return the created context
    return useContext(ThemeContext);
}