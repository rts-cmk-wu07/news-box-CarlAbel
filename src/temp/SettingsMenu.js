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
				padding: 10px 0;
				height: 101vh;
				background: ;
				gap: 3rem;
				& > * {
					opacity: 1;
				}
			`}
    `,
    toggleDarkModeButton: css`
      background: ${colors.secondaryColor_1};
      color: ${colors.text_1};
      opacity: 0.5;
      border: 1px solid ${colors.secondaryColor_2};
      border-radius: 16px;
      height: 50px;
      width: 90%;
      padding: 0 5px 0 5px;
    `,
    darkModeContainer: css`
      padding-top: 20px;
    `,
  }
  return (
    <div css={styles.settingsContainer}>
      <div>
        <HeadingCard type="HeadingPrimary" text="Manage" colors={colors} />
        <HeadingCard type="HeadingSub" text="Categories" colors={colors} />
      </div>

      <div>
        <SettingsList />
        <div css={styles.darkModeContainer}>
          <button css={styles.toggleDarkModeButton} onClick={handleThemeChange}>
            TOGGLE DARK MODE
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsMenu
