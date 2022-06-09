/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { vars } from "../../vars"

const Home = () => {
  const { light } = vars
  const styles = {
    inputContainer: css`
      padding: 1rem;
    `,
    input: css`
      width: 90%;
      height: 36px;
      background-color: ${light.secondaryColor_1};
      border: none;
      border-radius: 2px;
    `,
  }

  return (
    <div className="newsBox">
      <div css={styles.inputContainer}>
        <input
          css={styles.input}
          type="search"
          name="inputSearchHome"
          id="inputSearchHome"
        />
      </div>
      <div className="categoryLinks">
        <ul>Health</ul>
        <ul>Sport</ul>
        <ul>Travel</ul>
      </div>
    </div>
  )
}

export default Home
