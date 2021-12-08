import { useState, useEffect } from "react";
import { MovieModal } from "../../components/MovieModal";
import styles from "./movies.module.scss";


export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      await fetch('https://swapi.dev/api/films')
     .then(response => response.json())
     .then(data => setMovies(data.results))
     .catch(err => console.log(err))
    }
    fetchData();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMovie({})
  }

  const handleOnClick = (e) => {
    setIsOpen(true);  
    setSelectedMovie(e); 
  }


  return (
    <section className={styles.container}>
      {movies.map((movie, index) => (
        <div 
          key={index}
          className={styles.movieContainer} 
          onClick={() => handleOnClick(movie)}
        >
          <p>
            {movie?.title}
          </p>
        </div>
      ))}
      <MovieModal 
        isOpen={ isOpen }
        onRequestClose={ closeModal }
        movie={ selectedMovie }
      /> 
    </section>    
  )
}