/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import HeadingCard from "../components/HeadingCard"
import { useContext } from "react"
import Context from "../context/Context"
import SettingsList from "../components/SettingsList"

const SettingsMenu = ({ colors, handleThemeChange }) => {
  const optMenu = useContext(Context)
  const optMenuOpen = optMenu.optMenu

  const styles = {
    settingsContainer: css`
      background: ${colors.secondaryColor_1};
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 24px 10px 0px 10px;

      gap: 16px;
      padding: 0;
      height: 0;

      transition: 0.9s;

      & > * {
        opacity: 0;
        transition: 0.9s;
      }

      ${optMenuOpen &&
      `
				padding: 32px 0;
				height: 100vh;
				background: ;
				gap: 3rem;
				& > * {
					opacity: 1;
				}
			`}
    `,
    toggleDarkModeButton: css`
      background: ${colors.secondaryColor_2};
      color: ${colors.primaryColor_3};
      border-radius: 16px;
      height: 100px;
      width: 150px;
    `,
  }
  return (
    <div css={styles.settingsContainer}>
      <div>
        <HeadingCard type="HeadingPrimary" text="Manage" colors={colors} />
        <HeadingCard type="HeadingSub" text="Categories" colors={colors} />
      </div>
      <SettingsList />
      <button css={styles.toggleDarkModeButton} onClick={handleThemeChange}>
        Toggle Dark Mode
      </button>
    </div>
  )
}

export default SettingsMenu
