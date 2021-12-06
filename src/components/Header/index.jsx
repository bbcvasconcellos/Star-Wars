import { FiMenu } from "react-icons/fi";
import styles from "./header.module.scss";

export const Header = () => {
  return (
      <nav className={styles.container}>
        <a href="/">
          <h1>Star Wars</h1>
        </a>
        <a href="/filmes">Filmes</a>
        <a href="/questoes">Resultados Questoes</a>
        
      </nav>
  )
}


//<FiMenu className={styles.menuIcon}/>