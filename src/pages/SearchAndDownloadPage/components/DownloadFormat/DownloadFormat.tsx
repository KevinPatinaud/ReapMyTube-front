import { FC, useState } from "react";
import { FaFilm, FaMusic } from "react-icons/fa";
import styles from "./DownloadFormat.module.css";

export enum mediaType {
  audio,
  video,
}

export type DownloadFormatProps = {
  onChange?: (mediaType: mediaType) => void;
};

const DownloadFormat: FC<DownloadFormatProps> = ({ onChange = () => {} }) => {
  const [mediaTypeSelected, SetMediaTypeSelected] = useState(mediaType.audio);

  return (
    <div className={styles.downloadFormat}>
      Download format :{" "}
      <button
        className={styles.downloadFormatButton}
        onClick={() => {
          const newType =
            mediaTypeSelected === mediaType.audio
              ? mediaType.video
              : mediaType.audio;
          onChange(newType);
          SetMediaTypeSelected(newType);
        }}
      >
        {mediaTypeSelected === mediaType.audio && (
          <>
            <FaMusic /> Audio
          </>
        )}
        {mediaTypeSelected === mediaType.video && (
          <>
            <FaFilm /> Video
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadFormat;
