import React, { ReactNode, useContext, useState } from 'react'

interface ThemeInterface {
  darkMode: boolean
  toggleDarkMode?: () => void
  setDarkMode?: () => void
  setLightMode?: () => void
}

interface Props {
  children?: ReactNode
}

const ThemeContext = React.createContext<ThemeInterface>({
  darkMode: false
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  const setDarkMode = () => setIsDarkMode(true)
  const setLightMode = () => setIsDarkMode(false)

  return (
    <ThemeContext.Provider
      value={{
        darkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode,
        setDarkMode: setDarkMode,
        setLightMode: setLightMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
