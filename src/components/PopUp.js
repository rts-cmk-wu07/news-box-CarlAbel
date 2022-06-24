/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import FeatherIcon from "feather-icons-react"

import { Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"
import { useContext } from "react"

const PopUp = ({ popUp, popUpOpen }) => {
  const colors = useContext(ThemeContext)
  const styles = {
    popUp: css`
      width: calc(100vw - 4rem);
      height: 32px;
      position: fixed;
      top: 64px;
      left: 50%;
      transform: translateX(-50%);
      background: ${colors.primaryColor_1};
      z-index: 1000;
      border-radius: 20px;
      opacity: 0;
      padding: 0 32px;
      transition: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.text_3};
      flex-direction: column;
      gap: 1rem;
      pointer-events: none;
      & p {
        width: max(calc(100vw - 8rem), fit-content);
        opacity: 0;
        transition: 0.5s ease 0.5s;
        overflow-x: hidden;
      }
      & svg {
        width: 30px;
        height: 30px;
        transition: 0.7s;
        transform: scale(0.75) rotate(-90deg);
        opacity: 0;
      }
      ${popUpOpen &&
      `
                    height: 150px;
                    opacity: 1;
                    padding: 12px; 
                    pointer-events: all;
                    & svg {
                        transform: scale(1) rotate(0);
                        opacity: 0.8
                    }
                    & p {
                        opacity: 1;
                        transition: 0.5s;
                `}
    `,
  }
  return (
    <Link to="/archive" css={styles.popUp}>
      <FeatherIcon icon="info" />
      <p>{popUpOpen && popUp}</p>
    </Link>
  )
}

export default PopUp
