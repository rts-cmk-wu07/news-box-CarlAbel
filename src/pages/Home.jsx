import Sections from "../temp/Sections"
import UseFetch from "../hooks/UseFetch"

const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key="
const key = "uamZ2nGL5Ir5XAv0d0oMFBlMCB0JcLTR"

const Home = () => {
  const { data } = UseFetch(`${url}${key}`)
  const results = data && data.results

  return <main>{data && <Sections data={results} />}</main>
}

export default Home
