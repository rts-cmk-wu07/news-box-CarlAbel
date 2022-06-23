import Search from "../components/Search"
import Sections from "../temp/Sections"

const Archive = () => {
  const ls = localStorage.getItem("archive")
  const data = JSON.parse(ls)
  return (
    <div>
      <Search />
      <main>{data && <Sections data={data} />}</main>
    </div>
  )
}

export default Archive
