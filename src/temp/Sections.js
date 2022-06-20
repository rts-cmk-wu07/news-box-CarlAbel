import Section from "./Section"

const Sections = ({ data }) => {
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

  return (
    <div>
      {titles.map((title) => (
        <Section key={title} title={title} data={data} />
      ))}
    </div>
  )
}

export default Sections
