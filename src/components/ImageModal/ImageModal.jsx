import Modal from "react-modal";

import styles from "./ImageModal.module.css";
export default function ImageModal({ modalIsOpen, image, onClose }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      overlayClassName={styles["image-modal-overlay"]}
      className={styles["image-modal-content"]}
      onRequestClose={onClose}
      preventScroll={true}
    >
      <div style={{ backgroundColor: image?.color }}>
        <img src={image?.urls?.regular} alt={image?.alt_description} />
      </div>
    </Modal>
  );
}
