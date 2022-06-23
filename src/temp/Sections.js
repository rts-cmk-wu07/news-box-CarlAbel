import Section from "./Section"
import ToggleActiveContext from "../context/ToggleActiveContext"

import { useContext } from "react"

const Sections = ({ data }) => {
  const { sections } = useContext(ToggleActiveContext)

  const sorted = data.sort((a, b) => {
    if (a.section < b.section) {
      return -1
    }
    if (a.section > b.section) {
      return 1
    }
    return 0
  })

  const titles = [...new Set(sorted.map((item) => item.section))]

  const filteredTitles = sections.toggleActiveSections.filter((title) => {
    return titles.includes(title)
  })

  return (
    <div>
      {filteredTitles.map((title, index) => (
        <Section
          key={title}
          title={title}
          data={data}
          id={`section-${index}`}
        />
      ))}
    </div>
  )
}

export default Sections
