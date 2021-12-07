import { useState, useEffect } from "react";
import styles from "./movies.module.scss";


export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      await fetch('https://swapi.dev/api/films')
     .then(response => response.json())
     .then(data => setMovies(data.results))
    }
    fetchData()
  }, [])

  console.log(movies);

  return (
    <section className={styles.container}>
      {movies.map((movie, index) => (
        <div 
          key={index}
          className={styles.movieContainer}  
        >
          <p>
            {movie?.title}
          </p>
        </div>
      ))}
    </section>    
  )
}