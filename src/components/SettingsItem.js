import { useState, useContext } from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import HeadingCard from "./HeadingCard"
import ThemeContext from "../context/ThemeContext"

const SettingsItem = ({
  section,
  setState,
  toggleActiveSections,
  setToggleActiveSections,
}) => {
  const [active, setActive] = useState(setState)

  const colors = useContext(ThemeContext)

  const styles = {
    item: css`
      width: 100%;
      padding: 0.5rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    button: css`
      background: transparent;
      border: none;
      padding: 1rem 1.5rem 1rem 1.5rem;
      margin-right: -1.5rem;
      border-radius: 10rem;
    `,
    buttonDiv: css`
      display: flex;
      height: 2rem;
      width: 3.5rem;
      border-radius: 100px;
      background: ${active ? colors.primaryColor_1 : colors.secondaryColor_2};
      border: none;
      position: relative;
      align-items: center;
      transition: 0.3s;
    `,
    toggle: css`
      position: absolute;
      height: 1.7rem;
      width: 1.7rem;
      background: ${colors.text_3};
      transition: 0.2s;
      border-radius: 100px;
      left: ${active ? "calc(100% - 1.85rem)" : "0.15rem"};
      box-shadow: 0 0.25rem 0.5rem ${colors.text_1}20;
    `,
  }
  const clickHandler = () => {
    setActive(!active)
    if (active) {
      console.log(toggleActiveSections.indexOf(section))
      console.log(toggleActiveSections)
      setToggleActiveSections(
        toggleActiveSections.filter((title) => title !== section)
      )
    } else {
      const newSections = [...toggleActiveSections, section].sort()
      setToggleActiveSections(newSections)
    }
  }
  return (
    <li css={styles.item}>
      <HeadingCard type="HeadingSub" text={section} />
      <button
        css={styles.button}
        onClick={clickHandler}
        aria-label={`Toggle ${section} ${active ? "off" : "on"}`}
      >
        <div css={styles.buttonDiv}>
          <div css={styles.toggle}></div>
        </div>
      </button>
    </li>
  )
}

export default SettingsItem
