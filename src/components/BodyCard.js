/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const BodyCard = ({ type, colors, text }) => {
  const styles = {
    card: css`
      font-size: 11pt;
      font-weight: 300;
      height: 38px;
      opacity: 0.8;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
  }
  return <>{type === "textCard" && <p css={styles.card}>{text}</p>}</>
}

export default BodyCard
