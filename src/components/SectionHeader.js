import FeatherIcon from "feather-icons-react"
import HeadingCard from "./HeadingCard"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const SectionHeader = ({ title, isOpen, setIsOpen, numberOfArticles }) => {
  const colors = useContext(ThemeContext)
  const styles = {
    header: css`
      display: flex;
      padding: 0.75rem 1.5rem;
      gap: 1rem;
      align-items: center;
      overflow-y: hidden;
      cursor: pointer;
    `,
    icon: css`
      display: flex;
      align-items: center;
      justify-content: center;

      height: 2.5rem;
      width: 2.5rem;
      border-radius: 100px;
      color: ${colors.primaryColor_2};
      & svg {
        stroke-width: 2.5px;
      }
    `,
    button: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      border: none;
      color: inherit;
      transition: 0.25s;

      ${isOpen &&
      `
				transform: rotate(90deg);
			`}

      & svg {
        /* height: 2rem;
				width: 2rem; */
        color: inherit;
      }
    `,
    number: css`
      display: flex;
      margin-left: auto;
      opacity: 0.5;
      font-size: 0.8rem;
    `,
  }
  return (
    <header css={styles.header} onClick={() => setIsOpen(!isOpen)}>
      <div css={styles.icon}>
        <FeatherIcon icon="slack" />
      </div>
      <HeadingCard type="HeadingSub" text={title} />
      <span css={styles.number}>{numberOfArticles}</span>
      <button css={styles.button}>
        <FeatherIcon icon="chevron-right" />
      </button>
    </header>
  )
}

export default SectionHeader
