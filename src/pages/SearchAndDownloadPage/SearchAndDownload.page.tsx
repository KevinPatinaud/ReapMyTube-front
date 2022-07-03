import { FC, useCallback, useEffect, useReducer, useState } from "react";
import Thumbnail from "./components/Thumbnail/thumbnail.component";
import InfoDownload from "./components/InfoDownload/InfoDownload.component";
import React from "react";
import { useIntl } from "react-intl";
import { YoutubeService } from "../../services/Youtube/Youtube.service";
import { useNavigate, useParams } from "react-router-dom";
import FormVideo from "./components/Form/FormVideo.component";

const SearchAndDownloadPage: FC = () => {
  const [videosThumbnails, setVideosThumbnails] = useState([] as JSX.Element[]);
  const [modalAlreadyDisplayed, setModalAlreadyDisplayed] = useState(false);
  const navigate = useNavigate();
  const intl = useIntl();
  const [textToSearch, setTextTosearch] = useState(
    useParams<{ query: string }>().query
  );

  const youtubeService = new YoutubeService();

  const search = async (textToSearch: string) => {
    navigate("../" + textToSearch);
    setTextTosearch(textToSearch);

    const videoAPIresponse =
      textToSearch.length > 0 ? await youtubeService.search(textToSearch) : [];

    setVideosThumbnails(
      videoAPIresponse.map((video) => {
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
  };

  useEffect(() => {
    if (textToSearch) {
      search(textToSearch);
    }
  }, []);

  return (
    <>
      <MemoFormVideo previousTextToSearch={textToSearch} search={search} />
      {videosThumbnails}
      {modalAlreadyDisplayed && (
        <InfoDownload>
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
        </InfoDownload>
      )}
    </>
  );
};

const MemoFormVideo = React.memo(FormVideo);

export default SearchAndDownloadPage;
