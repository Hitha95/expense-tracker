import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./success-modal.css";

const customStyles = {
  content: {
    background: "cadetblue",
    width: "300px",
    height: "250px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SuccessModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <div className="modal-container">
        <label>Expense added successfully</label>
        <img
          src={require("../../data/images/modal-added-image.png").default}
          alt="success modal"
          className="success-image"
        />

        <div className="btn-home btn flex-center" onClick={closeModal()}>
          <Link to="/">Home</Link>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
