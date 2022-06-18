import { FC, useState } from "react";
import { video } from "../../../../model/video";
import { MediaService } from "../../../../services/Media/Media.serivce";
import styles from "./Thumbnail.module.css";

const mediaService = new MediaService();

const Thumbnail: FC<{
  videoToDisplay: video;
  onClick: () => void;
}> = ({ videoToDisplay, onClick }) => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const [video] = useState(videoToDisplay);

  return (
    <div
      data-testid={`thumbnail${video.id}`}
      className={styles.thumbnail}
      onClick={() => {
        onClick();

        setDisplayLoader(true);

        mediaService.download(
          `https://www.youtube.com/watch?v=${video.id}`,
          () => {
            setDisplayLoader(false);
          }
        );
      }}
    >
      <img
        src={video.image}
        alt={`video ${video.title}`}
        className={`${styles.thumbnailImg} ${
          displayLoader && ` ${styles.thumbnailImgLoading}`
        }`}
      />
      {displayLoader && (
        <img
          alt="loader"
          data-testid={`loader${video.id}`}
          className={styles.thumbnailImgLoader}
          src="/images/svgLoader.svg"
        />
      )}
      <span className={styles.thumbnailTitle}>{video.title}</span>
    </div>
  );
};

export default Thumbnail;
