import { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./ModalLight.module.css";

const ModalLight: FC<{ children: JSX.Element }> = (props) => {
  const [openned, setOpenned] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenned(false);
    }, 10 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Modal
      isOpen={openned}
      onRequestClose={() => {
        setOpenned(false);
      }}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0)",
          opacity: "0 !important",
          top: "75%",
          left: "70%",
          right: "3%",
          bottom: "5%",
        },
        content: {
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <button
        className={styles.closeButton}
        onClick={() => {
          setOpenned(false);
        }}
      >
        X
      </button>
      {props.children}
    </Modal>
  );
};

export default ModalLight;
