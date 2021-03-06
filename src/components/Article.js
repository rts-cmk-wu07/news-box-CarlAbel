/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"

import ThemeContext from "../context/ThemeContext"
import BodyCard from "./BodyCard"

import HeadingCard from "./HeadingCard"

const Article = ({ data }) => {
  const colors = useContext(ThemeContext)

  const clickAhref = () => {
    window.location.href = data.url
  }
  const styles = {
    article: css`
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-top: 1px solid ${colors.secondaryColor_2};
      background: ${colors.secondaryColor_1};
      width: 100%;
    `,
    img: css`
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 100px;
    `,
    div: css`
      width: calc(100% - 4.5rem - 1rem);
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    `,
    imgDiv: css`
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 100px;
      background: ${colors.text_3}50;
    `,
    textDecoration: css`
      text-decoration: none;
    `,
  }

  const Image = (media) => {
    if (media !== undefined) {
      return (
        <img
          alt="Article"
          css={styles.img}
          src={media["media-metadata"][0].url}
        />
      )
    }
    return <div css={styles.imgDiv}></div>
  }

  return (
    <article css={styles.article} onClick={clickAhref}>
      {Image(data.media[0])}
      <div css={styles.div}>
        <a css={styles.textDecoration} href={data.url}>
          <HeadingCard type="HeadingCard" text={data.title} />
        </a>
        <BodyCard type="textCard" text={data.abstract} />
      </div>
    </article>
  )
}

export default Article
