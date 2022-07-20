import React, { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import InfoDownload from "./components/InfoDownload/InfoDownload";
import { YoutubeService } from "../../services/Youtube/Youtube.service";
import FormVideo from "./components/Searchbar/Searchbar";
import DownloadFormat from "./components/DownloadFormat/DownloadFormat";

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
      {videosThumbnails.length > 0 && <DownloadFormat />}
      {videosThumbnails}
      {modalAlreadyDisplayed && <InfoDownload />}
    </>
  );
};

const MemoFormVideo = React.memo(FormVideo);

export default SearchAndDownloadPage;
