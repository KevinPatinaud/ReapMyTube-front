import { FC } from "react";
import LanguageButton from "../LanguageButton";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img className={styles.titleimg} src="/images/title.png" alt="title" />
      <LanguageButton />
    </div>
  );
};

export default Header;
