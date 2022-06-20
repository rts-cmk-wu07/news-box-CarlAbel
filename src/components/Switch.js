import "./Switch.css"
import cx from "classnames"

const Switch = ({ rounded = false }) => {
  const sliderCX = cx("slider", { rounded: rounded })
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className={sliderCX} />
    </label>
  )
}

export default Switch
