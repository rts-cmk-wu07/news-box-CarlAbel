/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Context from "./context/Context"
import ThemeContext from "./context/ThemeContext"
import ToggleActiveContext from "./context/ToggleActiveContext"

import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { vars } from "./vars/vars"
import { useState } from "react"

function App() {
  const { light, dark } = vars
  const [theme, setTheme] = useState(light)
  const handleThemeChange = () => {
    if (theme === dark) {
      setTheme(light)
    } else {
      setTheme(dark)
    }
  }
  const colors = theme

  const toggleActiveSectionsLS = JSON.parse(
    localStorage.getItem("toggleActiveSections")
  )
  console.log(toggleActiveSectionsLS)
  const sections = [
    "World",
    "U.S.",
    "New York",
    "Politics",
    "Business",
    "Opinion",
    "Technology",
    "Science",
    "Health",
    "Style",
    "Travel",
    "Sports",
    "Arts",
    "Books",
    "Food",
    "Magazine",
    "T Magazine",
    "Real Estate",
    "Video",
    "Gameplay",
    "Theater",
    "Well",
  ]

  const sectionList = sections.sort()
  const [toggleActiveSections, setToggleActiveSections] = useState(sectionList)
  const styles = {
    contentContainer: css`
      background: ${colors.secondaryColor_1};
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
    `,
  }
  const [optMenu, setOptMenu] = useState(false)
  return (
    <div className="App">
      <ThemeContext.Provider value={colors}>
        <Context.Provider value={{ optMenu, setOptMenu }}>
          <ToggleActiveContext.Provider
            value={{
              sections: { sectionList, toggleActiveSections },
              setToggleActiveSections,
            }}
          >
            <Navbar colors={colors} handleThemeChange={handleThemeChange} />

            <div css={styles.contentContainer}>
              <Outlet />
            </div>
          </ToggleActiveContext.Provider>
        </Context.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
