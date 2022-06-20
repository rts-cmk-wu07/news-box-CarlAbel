import { useEffect, useState } from "react"

const UseFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data")
          }
          return response.json()
        })
        .then((data) => {
          setIsPending(false)
          setData(data)
          setError(null)
        })
        .catch((err) => {
          setError(err.message)
          setIsPending(false)
        })
    }, 1000)
  }, [url])

  return { data }
}

export default UseFetch
