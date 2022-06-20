/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import ThemeContext from "./context/ThemeContext"
import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { vars } from "./vars/vars"
import { useState } from "react"
import Context from "./context/Context"

function App() {
  const { light, dark } = vars
  const [theme, setTheme] = useState("light")
  const handleThemeChange = () => {
    if (theme === light) {
      setTheme(dark)
    } else {
      setTheme(light)
    }
  }
  const colors = theme
  const styles = {
    content: css`
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
    `,
  }
  const [optMenu, setOptMenu] = useState(false)
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Context.Provider value={{ optMenu, setOptMenu }}>
          <>
            <Navbar colors={colors} />
          </>
          <div css={styles.content}>
            <Outlet />
          </div>
        </Context.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
