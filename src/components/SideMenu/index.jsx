import Modal from "react-modal";
import styles from "./sideMenu.module.scss";

export const SideMenu = ({ isOpen, onRequestClose }) => {
  return(
    <Modal
      isOpen={ isOpen }
      onRequestClose={ onRequestClose }
      className={styles.reactModalContent}
      overlayClassName={styles.reactModalOverlay}
    >
      <div>
        <a href="/">Main Menu</a>
        <a href="/movies">Movies</a>
        <a href="/questions">Quesstion Answers</a> 
      </div>

    </Modal>
  )
}