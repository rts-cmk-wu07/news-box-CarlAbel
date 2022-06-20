/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import "./Switch.css"

import { vars } from "../vars/vars"
import cx from "classnames"
import HeadingCard from "./HeadingCard"

const Switch = ({ rounded = false }) => {
  const sliderCX = cx("slider", { rounded: rounded })
  const { light } = vars

  const styles = {
    mainContainer: css`
      display: flex;
      flex-direction: column;

      border-radius: 32px;
      background: ${light.text_3};
      padding-top: 20px;
      height: 600px;
    `,
    labelContainer: css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      border-bottom: solid 1px ${light.secondaryColor_1};
      padding: 10px 24px;
      gap: 160px;
      background: ${light.text_3};
    `,
  }

  return (
    <div css={styles.mainContainer}>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Arts" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Buisness" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Climate" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Gameplay" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Opinion" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Real Estate" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Science" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="Technology" />
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
      <div css={styles.labelContainer}>
        <HeadingCard type="HeadingCard" text="World" />
        <label className="switch">
          <input type="checkbox" />
          <span className={sliderCX} />
        </label>
      </div>
    </div>
  )
}

export default Switch
