import React, { useContext, useState } from 'react'

interface ThemeInterface {
  darkMode: boolean
  toggleDarkMode?: () => void
  setDarkMode?: () => void
  setLightMode?: () => void
}

const DarkModeContext = React.createContext<ThemeInterface>({
  darkMode: false
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DarkModeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  const setDarkMode = () => setIsDarkMode(true)
  const setLightMode = () => setIsDarkMode(false)

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode,
        setDarkMode: setDarkMode,
        setLightMode: setLightMode
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

const useTheme = () => useContext(DarkModeContext)

export { DarkModeContext, DarkModeProvider, useTheme }
