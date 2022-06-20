import HeadingCard from "../components/HeadingCard"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"
import Context from "../context/Context"

import { vars } from "../vars/vars"
import Switch from "../components/Switch"
const Menu = () => {
  const optMenu = useContext(Context)
  const optMenuOpen = optMenu.optMenu

  const { light } = vars
  const styles = {
    menu: css`
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 24px;
      gap: 16px;
      padding: 0;
      height: 0;
      width: 100vw;
      transition: 0.9s;

      & > * {
        opacity: 0;
        transition: 0.9s;
      }

      ${optMenuOpen &&
      `
				padding: 32px 0;
				height: 100vh;
				background: ${light.secondaryColor_1};
				gap: 3rem;
				& > * {
					opacity: 1;
				}
			`}
    `,
  }
  return (
    <div css={styles.menu}>
      <div>
        <HeadingCard
          type="HeadingPrimary"
          text="Manage"
          color={light.primaryColor_1}
        />
        <HeadingCard
          type="HeadingSub"
          text="Categories"
          color={light.primaryColor_3}
        />
      </div>
      <Switch rounded={true} />
    </div>
  )
}

export default Menu
