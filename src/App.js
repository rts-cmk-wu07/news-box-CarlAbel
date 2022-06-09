/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"

const styles = {
  content: css`
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  `,
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <div css={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
