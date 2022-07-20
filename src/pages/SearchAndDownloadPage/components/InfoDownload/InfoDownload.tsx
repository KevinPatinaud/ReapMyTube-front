import { FC, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./InfoDownload.module.css";
import { TranslationKeys } from "../../../../locales/constants";

const enum display {
  block = "block",
  none = "none",
}

const InfoDownload: FC = () => {
  const [openned, setOpenned] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenned(false);
    }, 60 * 1000);

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
      <div className={styles.divInfoContent}>
        <FormattedMessage id={TranslationKeys.SEARCH_MODAL_WAIT_DOWNLOAD} />
      </div>
    </div>
  );
};

export default InfoDownload;
