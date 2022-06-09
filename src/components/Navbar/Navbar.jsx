/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link } from "react-router-dom"
import { vars } from "../../vars"

const Navbar = () => {
  const { light } = vars
  const styles = {
    navbar: css`
      padding: 2rem 2rem;
      border-bottom: 1px solid ${light.secondaryColor_2};
      border-top: none;

      & a {
        text-decoration: none;
        transition: 0.2s;
        font-weight: 600;
        color: #353bf152;

        &:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          height: 2px;
          width: 0%;
          background-color: #353bf152;
          transition: 0.3s;
          opacity: 0;
          border-radius: 100px;
        }

        &:hover {
          color: #353bf1;

          &:after {
            width: calc(100% + 8px);
            opacity: 0.5;
          }
        }
      }
    `,
    linksContainer: css`
      display: flex;
      justify-content: space-between;
    `,
    heading: css`
      color: #353bf1;
    `,
    links: css`
      margin-left: auto;
    `,
  }
  return (
    <nav css={styles.navbar}>
      <div css={styles.linksContainer}>
        <Link to="/archive">Archive</Link>
        <Link to="/home">Newsbox</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  )
}

export default Navbar
