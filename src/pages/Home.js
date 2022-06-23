/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

import Sections from "../temp/Sections"
import UseFetch from "../hooks/UseFetch"
import Search from "../components/Search"

const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key="
const key = "uamZ2nGL5Ir5XAv0d0oMFBlMCB0JcLTR"

const Home = () => {
  const colors = useContext(ThemeContext)
  const styles = {
    loading: css`
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 5rem 0;
      background: ${colors.text_3};

      & span {
        display: block;
        background: ${colors.primaryColor_1};
        height: 2rem;
        width: 3rem;
        border-radius: 100px;
        animation: loading 1s infinite 0s ease;
        opacity: 0.1;
        transform: scale(0.5);
      }

      @keyframes loading {
        50% {
          opacity: 1;
          transform: scale(1);
          width: 4rem;
        }
      }
    `,
  }
  const { data, isPending, error } = UseFetch(`${url}${key}`)
  const results = data && data.results

  return (
    <div>
      <Search />
      <div>
        {error && <p>{error}</p>}
        {isPending && (
          <div css={styles.loading}>
            <span></span>
            <span></span>
          </div>
        )}
        <main>{data && <Sections data={results} />}</main>
      </div>
    </div>
  )
}

export default Home
