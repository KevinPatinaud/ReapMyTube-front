import { FC, useCallback, useEffect, useState } from "react";
import Thumbnail from "./components/Thumbnail/Thumbnail.component";
import InfoDownload from "./components/InfoDownload/InfoDownload.component";
import React from "react";
import { YoutubeService } from "../../services/Youtube/Youtube.service";
import { useNavigate, useParams } from "react-router-dom";
import FormVideo from "./components/Form/FormVideo.component";

const youtubeService = new YoutubeService();

const SearchAndDownloadPage: FC = () => {
  const [videosThumbnails, setVideosThumbnails] = useState([] as JSX.Element[]);
  const [modalAlreadyDisplayed, setModalAlreadyDisplayed] = useState(false);
  const navigate = useNavigate();
  const [opening, setOpening] = useState(true);
  const [textToSearch, setTextTosearch] = useState(
    useParams<{ query: string }>().query
  );

  const search = useCallback(
    async (query: string) => {
      console.log("search");
      navigate("../" + query);
      setTextTosearch(query);

      const videoAPIresponse =
        query.length > 0 ? await youtubeService.search(query) : [];

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
    },
    [navigate]
  );

  useEffect(() => {
    if (opening) {
      setOpening(false);
      if (textToSearch) {
        search(textToSearch);
      }
    }
  }, [opening, search, textToSearch]);

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
