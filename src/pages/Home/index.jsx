import styles from "./home.module.scss";
import starWarsPoster from "../../assets/img/death_star.png";
import { Button } from "../../components/Button";
import { useState } from "react";


export const Home = () => {
  /* const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    setRedirect(prevState => !prevState)
  }

  console.log(redirect); */

  return (
    <div className={styles.container}>
      <section className={styles.textContent}>
        <span>Bem vindo(a) jovem Padawan!</span>
        <div>
          <h2>Confira todos os títulos da série! </h2>
          <br />
          <h1>May the Force <br />Be With You </h1>
        </div>
        <Button text="Ver filmes" />
      </section>
      <img src={starWarsPoster} alt="star wars new hope poster"/>
    </div>
  )
}