import { FC, useState } from "react";
import { FaFilm, FaMusic } from "react-icons/fa";
import { video } from "../../../../model/video";
import { MediaService } from "../../../../services/Media/Media.serivce";
import { mediaType } from "../DownloadFormat/DownloadFormat";
import styles from "./Thumbnail.module.css";

const mediaService = new MediaService();

const Thumbnail: FC<{
  video: video;
  formatToDownload: mediaType;
  onClick: () => void;
}> = ({ video, formatToDownload, onClick }) => {
  const [displayLoader, setDisplayLoader] = useState(false);

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
      {/*   
      <div className={styles.downloadFormat}>
        {formatToDownload === mediaType.audio ? <FaMusic /> : <FaFilm />}
      </div>
    */}
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
