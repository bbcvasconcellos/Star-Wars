import { Link } from "react-router-dom"
import styles from "./home.module.scss";
import starWarsPoster from "../../assets/img/death_star.png";
import { Button } from "../../components/Button";


export const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.textContent}>
        <span>Welcome young Padawan!</span>
        <div>
          <h3>Check it out all movies!</h3>
          <br />
          <h1>May the Force <br />Be With You </h1>
        </div>
        <Link to='/movies'>
          <Button text="Go to Movies" />
        </Link>
      </section>
      <img src={starWarsPoster} alt="star wars new hope poster"/>
    </div>
  )
}