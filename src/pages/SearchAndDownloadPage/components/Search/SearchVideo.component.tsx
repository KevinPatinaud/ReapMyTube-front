import { FC, useState } from "react";
import { FaFilm, FaMusic, FaSearch } from "react-icons/fa";
import styles from "./SearchVideo.module.css";
import ToggleButton from "../../../../components/ChangeValueButton/ChangeValueButton";
import { YoutubeService } from "../../../../services/Youtube/Youtube.service";
import { useIntl } from "react-intl";
import { TranslationKeys } from "../../../../locales/constants";

const youtubeService = new YoutubeService();

const SearchVideo: FC<{ setVideoList: Function }> = (props) => {
  const [searchText, setSearchText] = useState("");

  const intl = useIntl();

  async function search() {
    await youtubeService.search(searchText).then((videoAPIresponse) => {
      props.setVideoList(videoAPIresponse);
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <ToggleButton texts={[<FaMusic />, <FaFilm />]} />
      <input
        data-testid="searchBar"
        value={searchText}
        type="text"
        className={styles.searchInput}
        placeholder={intl.formatMessage({ id: TranslationKeys.SEARCH_VIDEO })}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className={styles.searchButton} data-testid="searchBtn">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchVideo;
