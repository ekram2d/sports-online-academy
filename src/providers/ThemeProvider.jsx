import React, { createContext, useState } from 'react';

export const ThemeContext= createContext()
const ThemeProvider = ({children}) => {
      const [darkmode, setDarkmode]= useState(false);
      const toggleMode=()=>{
            setDarkmode(!darkmode)
      }
      return (
            <div>
                  <ThemeContext.Provider value={{darkmode, toggleMode}}>
                        {children}
                  </ThemeContext.Provider>
            </div>
      );
};

export default ThemeProvider;