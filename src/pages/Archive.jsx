import Sections from "../temp/Sections"

const Archive = () => {
  const ls = localStorage.getItem("archive")
  const data = JSON.parse(ls)
  return <main>{data && <Sections data={data} />}</main>
}

export default Archive
