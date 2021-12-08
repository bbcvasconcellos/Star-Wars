import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useWidth } from "../../hook/useWidth";
import styles from "./header.module.scss";

export const Header = () => {  
  const { width } = useWidth();

  return (
      <nav className={styles.container}>
        <a href="/">
          <h1>Star Wars</h1>
        </a>
        {width > 760 ? 
          <>
            <a href="/filmes">Filmes</a>
            <a href="/questoes">Resultados Questões</a> 
          </> :
          <FiMenu 
            className={styles.menu}
            /* onClick={} */  
          />
        }  
      </nav>
  )
}


//<FiMenu className={styles.menuIcon}/>