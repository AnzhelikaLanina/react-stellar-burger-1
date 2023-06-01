import styles from "./modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");
const Modal = ({ overlayClick, btnEscClick, children }) => {
    React.useEffect(() => {
        document.addEventListener("keydown", btnEscClick);
        return () => {
            document.removeEventListener("keydown", btnEscClick);
        };
    }, []);

    return  ReactDOM.createPortal (
        <>
                <section className={styles.main}>
                    <div className={styles.container}>
                        {children}
                    </div>
                    <ModalOverlay overlayClick={overlayClick} />
                </section>
        </>,
        modalRoot
    )
}

Modal.propTypes = {
    children: PropTypes.object,
    overlayClick: PropTypes.func.isRequired,
    btnEscClick: PropTypes.func.isRequired
}

export default Modal;