import SettingsItem from "./SettingsItem"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import ToggleActiveContext from "../context/ToggleActiveContext"

const SettingsList = () => {
  const { sections, setToggleActiveSections } = useContext(ToggleActiveContext)
  const { sectionList, toggleActiveSections } = sections

  const colors = useContext(ThemeContext)

  const height = 5

  const toggleCount = 8
  const styles = {
    list: css`
      background: ${colors.text_3};
      border-radius: 20px;
      width: 100%;

      & li {
        border-bottom: 1px solid ${colors.secondaryColor_1};
      }
    `,

    toggleList: css`
      height: calc(${height} * ${toggleCount}rem);

      transition: 0.5s;
    `,
  }
  return (
    <ul css={styles.list}>
      <div css={styles.toggleList}>
        {sectionList.map((section, index) => (
          <SettingsItem
            section={section}
            key={index}
            setState={toggleActiveSections.includes(section)}
            toggleActiveSections={toggleActiveSections}
            setToggleActiveSections={setToggleActiveSections}
          />
        ))}
      </div>
    </ul>
  )
}

export default SettingsList
