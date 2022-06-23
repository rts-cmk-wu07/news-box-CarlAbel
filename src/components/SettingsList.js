import SettingsItem from "./SettingsItem"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import FeatherIcon from "feather-icons-react"

import { useState, useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import ToggleActiveContext from "../context/ToggleActiveContext"

const SettingsList = () => {
  const { sections, setToggleActiveSections } = useContext(ToggleActiveContext)
  const { sectionList, toggleActiveSections } = sections
  const [collapsed, setCollapsed] = useState(true)

  const colors = useContext(ThemeContext)

  const height = 5
  const listHeight = height * sectionList.length
  const collapsedCount = 4
  const styles = {
    list: css`
      background: ${colors.text_3};
      border-radius: 1.5rem;
      width: 100%;
      & li {
        border-bottom: 1px solid ${colors.secondaryColor_1};
      }
    `,
    li: css`
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: none;
      position: sticky;
    `,
    button: css`
      width: 100%;
      height: 4rem;
      padding: 1rem 2rem;
      background: transparent;
      border: none;
      color: ${colors.text_1};
      font-size: 0.9rem;
      font-weight: 600;
      align-items: center;
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      & svg {
        transition: 0.3s;
      }
      ${!collapsed &&
      `
				& svg {
					transform: rotate(180deg);
			}
			`}
    `,
    toggleList: css`
      height: calc(${height} * ${collapsedCount}rem);
      overflow-y: hidden;
      transition: 0.5s;
      ${!collapsed &&
      `
				height: ${listHeight}rem;
			`}
    `,
  }
  return (
    <ul css={styles.list}>
      <div css={styles.toggleList}>
        {sectionList.map((section, index) => (
          <SettingsItem
            section={section}
            key={index}
            state={toggleActiveSections.includes(section)}
            toggleActiveSections={toggleActiveSections}
            setToggleActiveSections={setToggleActiveSections}
          />
        ))}
      </div>
      <li css={styles.li}>
        <button css={styles.button} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand list" : "Collapse list"}{" "}
          <FeatherIcon icon="chevron-down" />
        </button>
      </li>
    </ul>
  )
}

export default SettingsList
