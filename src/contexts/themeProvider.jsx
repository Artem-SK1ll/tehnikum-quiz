import React, { Children, useEffect, useMemo, useState } from "react";
import { ThemeContext, themes } from "./themeContext";


export const ThemeProvider=()=>{
     const   [themeValue,setThemeValue ]=useState(themes.light)  
     
     useEffect(()=>{
        const persistedTheme = JSON.parse(localStorage.getItem("currentTheme"))
       if(persistedTheme){
        setThemeValue(persistedTheme)
       } 
    },[])
     
     //Переключение темы и сохранение в localStrange
     const toggleTheme=() =>{
        setThemeValue((prev)=>{
            let newTheme= prev===themes.light ? themes.dark : themes.light;
            localStorage.setItem("currentTheme",JSON.stringify(newTheme));
            return newTheme;
        });
     };
    //оптимизируем наше значение через usseMemo
     const contextValue = useMemo(()=>{
      return{
        theme:themeValue,
        toggleTheme
      }
     },[themeValue])
     return <ThemeContext.Provider>{children}</ThemeContext.Provider> 
};