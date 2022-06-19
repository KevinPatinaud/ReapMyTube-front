import { FC, useCallback, useState } from "react";
import SearchVideo from "./components/Search/SearchVideo.component";
import Thumbnail from "./components/Thumbnail/thumbnail.component";
import ModalLight from "./components/ModalLight/ModalLight.component";
import { video } from "../../model/video";
import React from "react";
import { useIntl } from "react-intl";

const SearchAndDownloadPage: FC = () => {
  const [videosThumbnails, setVideosThumbnails] = useState([] as JSX.Element[]);
  const [modalAlreadyDisplayed, setModalAlreadyDisplayed] = useState(false);

  const intl = useIntl();

  console.log(intl.locale);

  return (
    <>
      <MemoSearchVideo
        setVideoList={useCallback((videos: video[]) => {
          setVideosThumbnails(
            videos.map((video) => {
              return (
                <Thumbnail
                  key={video.id}
                  videoToDisplay={video}
                  onClick={() => {
                    setModalAlreadyDisplayed(true);
                  }}
                />
              );
            })
          );
        }, [])}
      />
      {videosThumbnails}
      {modalAlreadyDisplayed && (
        <ModalLight>
          <div>
            <p>
              The generation of your media have been well started, but it can
              take several minutes to generate the file.
            </p>
            <p>
              So please be patient, the file will be automatically downloaded
              when it will be ready :-)
            </p>
          </div>
        </ModalLight>
      )}
    </>
  );
};

const MemoSearchVideo = React.memo(SearchVideo);

export default SearchAndDownloadPage;
