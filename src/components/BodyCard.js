/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const BodyCard = ({ type, text }) => {
  const colors = useContext(ThemeContext)
  const styles = {
    card: css`
      color: ${colors.text_1};
      font-size: 11pt;
      font-weight: 300;
      height: 30px;
      opacity: 0.7;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-clamp: 2;
    `,
  }
  return <>{type === "textCard" && <p css={styles.card}>{text}</p>}</>
}

export default BodyCard
