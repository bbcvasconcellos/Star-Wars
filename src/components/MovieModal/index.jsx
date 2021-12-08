import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import styles from "./modal.module.scss";
import { useEffect, useState } from "react";

export const MovieModal = ({ isOpen, onRequestClose, movie }) => {
  const [people, setPeople] = useState([]);

  /* const callback = useCallback(() => {
    movie.characters?.forEach((character, index) => {
      let num = character.match(/\d+/);
      if(index > 20) return
      const fetchPeople = async() => {
        await fetch(`https://swapi.dev/api/people/${num[0]}/`)
          .then(response => response.json())
          .then(data => setPeople(prevState => [...prevState, data]))
      }
      fetchPeople()
    })
  }, [movie]) */

  console.log(people);

  useEffect(() => {
    movie.characters?.forEach(character => {
      let num = character.match(/\d+/);
      const fetchPeople = async() => {
        await fetch(`https://swapi.dev/api/people/${num[0]}/`)
          .then(response => response.json())
          .then(data => setPeople(prevState => [...prevState, data]))
      }
      fetchPeople() 
    })
    
  }, [movie]) 

  useEffect(() => {
    if(!isOpen) {
      setPeople([]);
    }
  }, [isOpen])

  console.log(people);
  
  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={ onRequestClose }
      overlayClassName={styles.reactModalOverlay}
      className={styles.reactModalContent}
    >
      <GrClose 
        onClick={ onRequestClose } 
        className={styles.close}  
      />
      <div className={styles.innerModal}>
        <h3>{movie.title}</h3>
        <p>Episode:&nbsp;<span><strong>{movie.episode_id}</strong></span></p>
        <p>{movie.opening_crawl}</p>
        <strong>Personagens nesse filme: </strong>
        <ul>
          {people.map((person, key) => (
            <li key={key}>{person.name}</li>            
          ))}
        </ul>
      </div>
    </Modal>
  )
}