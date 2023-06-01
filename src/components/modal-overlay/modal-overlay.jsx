import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ overlayClick }) => {
    return (
        <div onClick={overlayClick} className={styles.main}></div>
    )
}

ModalOverlay.protoTypes = {
    overlayClick: PropTypes.func.isRequired,
}

export default ModalOverlay;