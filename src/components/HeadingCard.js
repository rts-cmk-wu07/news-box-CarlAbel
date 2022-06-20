/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import { vars } from "../vars/vars"

const HeadingCard = ({ type, color, text }) => {
  const [theme, setTheme] = useState("light")
  const handleThemeChange = () => {
    if (theme === light) {
      setTheme(dark)
    } else {
      setTheme(light)
    }
  }
  const { light, dark } = vars
  const styles = {
    h1: css`
      font-size: 30pt;
      font-weight: bold;
      color: ${color || light.text_1};
    `,
    h2: css`
      font-size: 24pt;
      font-weight: bold;
      color: ${color || light.text_1};
    `,
    h3: css`
      font-size: 15pt;
      font-weight: bold;
      color: ${color || light.text_1};
    `,
    h4: css`
      font-size: 13pt;
      font-weight: bold;
      color: ${color || light.text_1};
      text-transform: uppercase;
      letter-spacing: 1px;
    `,
    h5: css`
      font-size: 12pt;
      font-weight: 700;
      color: ${color || light.text_1};
      height: 20px;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,
  }
  return (
    <>
      {type === "HeadingPrimary" && <h1 css={styles.h1}>{text}</h1>}
      {type === "HeadingSecondary" && <h2 css={styles.h2}>{text}</h2>}
      {type === "HeadingSection" && <h3 css={styles.h3}>{text}</h3>}
      {type === "HeadingSub" && <h4 css={styles.h4}>{text}</h4>}
      {type === "HeadingCard" && <h5 css={styles.h5}>{text}</h5>}
    </>
  )
}

export default HeadingCard
