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
        <a href="/">Menu</a>
        <a href="/filmes">Filmes</a>
        <a href="/questoes">Resultados Questões</a> 
      </div>

    </Modal>
  )
}