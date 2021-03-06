import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Searchbar.module.css";
import { useIntl } from "react-intl";
import { TranslationKeys } from "../../../../locales/constants";

const FormVideo: FC<{
  previousTextToSearch: string | undefined;
  search: (textToSearch: string) => void;
}> = ({ previousTextToSearch, search }) => {
  const [textToSearch, setTextToSearch] = useState(
    previousTextToSearch ? previousTextToSearch : ""
  );

  const intl = useIntl();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search(textToSearch);
      }}
    >
      <input
        data-testid="searchBar"
        value={textToSearch}
        type="text"
        className={styles.searchInput}
        placeholder={intl.formatMessage({ id: TranslationKeys.SEARCH_VIDEO })}
        onChange={(e) => {
          setTextToSearch(e.target.value);
        }}
      />
      <button className={styles.searchButton} data-testid="searchBtn">
        <FaSearch />
      </button>
    </form>
  );
};

export default FormVideo;
