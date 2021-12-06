import { useState, useEffect } from "react"


export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      await fetch('https://swapi.dev/api/films')
     .then(response => response.json())
     .then(data => setMovies(data))
    }
    fetchData()
  }, [])

  console.log(movies);

  return (
    <>
      <p>Oi</p>
    </>
    
  )
}