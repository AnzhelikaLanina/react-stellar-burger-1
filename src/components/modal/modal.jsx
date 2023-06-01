import styles from "./modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");
const Modal = ({ closeModal, children }) => {

    React.useEffect(() => {
        const handleEsc = (evt) => {
            evt.key === 'Escape' && closeModal();
        }

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return  ReactDOM.createPortal (
        <>
                <section className={styles.main}>
                    <div className={styles.container}>
                        {children}
                    </div>
                    <ModalOverlay closeModal={closeModal} />
                </section>
        </>,
        modalRoot
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default Modal;