import React, { useState, useContext, useCallback } from 'react'
import Parent from './components/Tabs/Tabs'

const THEMES = {
  dark: {
    background: "#000",
    color: "#FFF"
  },
  light: {
    background: "#FFF",
    color: "#000"
  }
}

const ThemeContext = React.createContext()

const ToolBar = () => {
  return (
    <div>
      <ThemedButton> Hello </ThemedButton>
    </div>
  )
}

const ThemedButton = ({ children }) => {
  const theme = useContext(ThemeContext)
  return (
    <button style={theme}> {children} </button>
  )
}

const Switcher = ({ click }) => {
  const theme = useContext(ThemeContext)
  return <button onClick={click} style={theme}>Switch !</button>
}


function App() {

  const [themeValue, setThemeValue] = useState(THEMES.light)

  const handleClick = useCallback(() => {
    setThemeValue(t => t === THEMES.light ? THEMES.dark : THEMES.light)
  })

  return (
    <div>
      <ThemeContext.Provider value={themeValue}>
        <ToolBar />
        <Switcher click={handleClick} />
      </ThemeContext.Provider>
      <button onClick={handleClick}>toggle theme</button>

    </div>
  );
}

export default App;
