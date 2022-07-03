import { FC, useEffect, useState } from "react";
import styles from "./InfoDownload.module.css";

const enum display {
  block = "block",
  none = "none",
}

const InfoDownload: FC<{ children: JSX.Element }> = ({ children }) => {
  const [openned, setOpenned] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenned(false);
    }, 10 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={styles.divInfo}
      style={{ display: openned ? display.block : display.none }}
    >
      <button
        className={styles.closeButton}
        onClick={() => {
          setOpenned(false);
        }}
      >
        X
      </button>
      <div className={styles.divInfoContent}>{children}</div>
    </div>
  );
};

export default InfoDownload;
