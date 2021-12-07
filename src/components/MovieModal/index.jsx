import Modal from "react-modal";

export const MovieModal = ({ isOpen, onRequestClose, movie }) => {

  /* console.log(movie); */
  
  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={ onRequestClose }
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h1>{/* {movie.title} */}</h1>
    </Modal>
  )
}