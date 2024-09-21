import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        primary: '#052260',
        secondary: '#fff',
        background: '#f0f0f0',
        text: '#000',
    });

    const updateTheme = (newTheme) => setTheme(newTheme);

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
