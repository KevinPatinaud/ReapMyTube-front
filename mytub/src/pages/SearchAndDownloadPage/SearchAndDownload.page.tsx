import { FC, useCallback, useEffect, useState } from "react";
import SearchVideo from "./components/Search/SearchVideo.component";
import Thumbnail from "./components/Thumbnail/thumbnail.component";
import ModalLight from "./components/ModalLight/ModalLight.component";
import { video } from "../../model/video";
import React from "react";
import { useIntl } from "react-intl";

const SearchAndDownloadPage: FC = () => {
  const [videoList, setVideoList] = useState([] as video[]);
  const [videoListJSX, setVideoListJSX] = useState([] as JSX.Element[]);
  const [modalAlreadyDisplayed, setModalAlreadyDisplayed] = useState(false);

  useEffect(() => {
    setVideoListJSX(
      videoList.map((video) => {
        return (
          <Thumbnail
            key={video.id}
            video={video}
            onClick={() => {
              setModalAlreadyDisplayed(true);
            }}
          />
        );
      })
    );
  }, [videoList]);

  const intl = useIntl();

  console.log(intl.locale);

  return (
    <>
      <MemoSearchVideo
        setVideoList={useCallback((videos: video[]) => {
          setVideoList(videos);
        }, [])}
      />
      {videoListJSX}
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
