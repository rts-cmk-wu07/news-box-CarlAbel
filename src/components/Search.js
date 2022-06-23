/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
const Search = () => {
  const colors = useContext(ThemeContext)
  const styles = {
    searchContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background: ${colors.secondaryColor_1};
      border-top: 1px solid ${colors.secondaryColor_2};
      border-bottom: 1px solid ${colors.secondaryColor_2};
    `,
    search: css`
      color: ${colors.text_1};
      background: ${colors.secondaryColor_2};
      opacity: 0.6;
      border: none;
      border-radius: 12px;
      padding: 10px;
      margin: 2rem;
      width: 90%;
    `,
  }
  return (
    <div css={styles.searchContainer}>
      <input css={styles.search} type="search" value="   Search News" />
    </div>
  )
}

export default Search
