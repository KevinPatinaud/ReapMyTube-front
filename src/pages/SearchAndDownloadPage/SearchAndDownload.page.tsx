import React, { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import InfoDownload from "./components/InfoDownload/InfoDownload";
import { YoutubeService } from "../../services/Youtube/Youtube.service";
import FormVideo from "./components/Searchbar/Searchbar";
import DownloadFormat, {
  mediaType,
} from "./components/DownloadFormat/DownloadFormat";
import { video } from "../../model/video";
import ThumbnailList from "./components/ThumbnailList/ThumbnailList";

const youtubeService = new YoutubeService();

const SearchAndDownloadPage: FC = () => {
  const [modalAlreadyDisplayed, setModalAlreadyDisplayed] = useState(false);
  const [videos, setVideos] = useState([] as video[]);
  const [formatToDownload, setFormatToDownload] = useState(mediaType.video);
  const [textToSearch, setTextTosearch] = useState(
    useParams<{ query: string }>().query
  );
  const navigate = useNavigate();

  const search = useCallback(
    async (query: string) => {
      navigate("../" + query);
      setTextTosearch(query);
      setVideos(query.length > 0 ? await youtubeService.search(query) : []);
    },
    [navigate]
  );

  useEffect(() => {
    if (textToSearch) {
      search(textToSearch);
    }
  }, []);

  return (
    <>
      <MemoFormVideo previousTextToSearch={textToSearch} search={search} />
      {videos.length > 0 && <DownloadFormat onChange={setFormatToDownload} />}
      <MemoThumbnailList
        videos={videos}
        formatToDownload={formatToDownload}
        onThumbnailClick={() => {
          setModalAlreadyDisplayed(true);
        }}
      />
      {modalAlreadyDisplayed && <InfoDownload />}
    </>
  );
};

const MemoFormVideo = React.memo(FormVideo);
const MemoThumbnailList = React.memo(ThumbnailList);

export default SearchAndDownloadPage;
