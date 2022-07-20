import { FC } from "react";
import { video } from "../../../../model/video";
import { mediaType } from "../DownloadFormat/DownloadFormat";
import Thumbnail from "../Thumbnail/Thumbnail";

export interface ThumbnailListProps {
  videos: video[];
  formatToDownload: mediaType;
  onThumbnailClick: () => void;
}

const ThumbnailList: FC<ThumbnailListProps> = ({
  videos,
  formatToDownload,
  onThumbnailClick,
}: ThumbnailListProps) => {
  return (
    <>
      {videos.map((video) => {
        return (
          <Thumbnail
            key={video.id}
            video={video}
            formatToDownload={formatToDownload}
            onClick={onThumbnailClick}
          />
        );
      })}
    </>
  );
};

export default ThumbnailList;
