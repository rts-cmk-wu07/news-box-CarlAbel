/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import FeatherIcon from "feather-icons-react"

import { Link, useLocation } from "react-router-dom"

import { useContext } from "react"
import Context from "../context/Context"

import SettingsMenu from "../temp/SettingsMenu"
import HeadingCard from "./HeadingCard"
import ThemeContext from "../context/ThemeContext"

const Navbar = ({ handleThemeChange }) => {
  const colors = useContext(ThemeContext)
  const location = useLocation()

  const optMenu = useContext(Context)
  const optMenuOpen = optMenu.optMenu
  const setOptMenu = optMenu.setOptMenu

  const aDuration = 0.3
  const styles = {
    navbar: css`
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      align-items: center;

      padding: 24px 32px 0 32px;
      border-bottom: 1px solid ${colors.secondaryColor_1};
      background: ${colors.secondaryColor_1};
      z-index: 1000;
      backdrop-filter: blur(1rem);
      ${optMenuOpen &&
      `
				background: ${colors.secondaryColor_1};
			`}
    `,
    linksContainer: css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    `,
    settingsBtn: css`
      display: flex;
      justify-content: center;
      align-items: center;

      background: transparent;
      position: relative;
      border: none;
    `,
    settingsIcon: css`
      transition: 0.5s;
      color: ${colors.text_1};
      ${optMenuOpen &&
      `
      opacity: 0;
      `}
    `,
    cross: css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: ${aDuration}s;
      width: 100%;
      height: 100%;
      opacity: 0;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 2px;
        background: ${colors.text_1};
        border-radius: 100px;
        transition: ${aDuration}s;
      }

      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      ${optMenuOpen &&
      `
				transform: translate(-50%, -50%) scale(1);
				opacity: 1;

				&:before,
				&:after {
					width: 1.5rem;
				};
			`}
    `,
    links: css`
      transition: 0.3s;
      ${optMenuOpen &&
      `
				opacity: 0;
				
				pointer-events: none;
			`}
    `,
  }
  return (
    <nav css={styles.navbar}>
      <div css={styles.linksContainer}>
        {location.pathname === "/home" ? (
          <Link to="archive" css={styles.links}>
            <FeatherIcon icon="inbox" />
          </Link>
        ) : (
          <Link to="home" css={styles.links}>
            <FeatherIcon icon="chevron-left" />
          </Link>
        )}
        <HeadingCard
          type="HeadingSection"
          text={
            optMenuOpen
              ? "Settings"
              : location.pathname === "/archive"
              ? "Archive"
              : "News Box"
          }
        />

        <button
          css={styles.settingsBtn}
          onClick={() => setOptMenu(!optMenuOpen)}
        >
          <FeatherIcon icon="settings" css={styles.settingsIcon} />
          <div css={styles.cross}></div>
        </button>
      </div>
      <SettingsMenu colors={colors} handleThemeChange={handleThemeChange} />
    </nav>
  )
}

export default Navbar
