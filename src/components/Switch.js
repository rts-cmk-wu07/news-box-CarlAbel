/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import "./Switch.css"

import cx from "classnames"
import HeadingCard from "./HeadingCard"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const Switch = ({ rounded = false }) => {
  const colors = useContext(ThemeContext)
  const sliderCX = cx("slider", { rounded: rounded })

  const styles = {
    mainContainer: css`
      display: flex;
      flex-direction: column;

      border-radius: 32px;
      background: ${colors.secondaryColor_2};
      padding-top: 20px;
      height: 600px;
    `,
    labelContainer: css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      border-bottom: solid 1px ${colors.secondaryColor_1};
      padding: 10px 24px;
      gap: 100px;
      background: ${colors.secondaryColor_2};
    `,
    borderRadius: css`
      border-radius: 24px;
    `,
  }

  return (
    <div css={styles.mainContainer}>
      <div className="borderRadiusTop" css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="ARTS" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="BUISNESS" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="CLIMATE" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="GAMEPLAY" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="OPINION" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="REAL ESTATE" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="SCIENCE" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="TECHNOLOGY" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="U.S." />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div className="borderRadiusBottom " css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="WORLD" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
    </div>
  )
}

export default Switch
