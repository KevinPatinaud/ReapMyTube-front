import { FC } from "react";
import LanguageButton from "../LanguageButton";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img
        data-testid="HeaderImg"
        className={styles.titleimg}
        src="/images/title.png"
        alt="title"
      />
      <LanguageButton />
    </div>
  );
};

export default Header;
