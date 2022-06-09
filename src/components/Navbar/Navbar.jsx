/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const styles = {
    navbar: css`
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      max-width: 1000px;
      margin: 0 auto;
      border: 4px solid #353bf152;
      border-radius: 0 0 1.5rem 1.5rem;
      justify-content: space-between;
      border-top: none;
      background: #fefefe;

      & a {
        margin-left: 16px;
        text-decoration: none;
        padding: 6px;
        transition: 0.2s;
        font-weight: 600;
        position: relative;
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
    heading: css`
      color: #353bf1;
    `,
    links: css`
      margin-left: auto;
    `,
  }
  return (
    <nav css={styles.navbar}>
      <div className="links" css={styles.links}>
        <Link to="/home">Home</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  )
}

export default Navbar
