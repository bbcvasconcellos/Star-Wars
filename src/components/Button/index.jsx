import styles from "./button.module.scss"

export const Button = ({text, ...rest}) => {
  return (
    <button 
      className={styles.redirectButton}
      {...rest}
    >
      {text}
    </button>
  )
}