import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          styles.link + " " + (isActive ? styles.linkActive : "")
        }
      >
        Download
      </NavLink>
      <NavLink
        to="/information"
        className={({ isActive }) =>
          styles.link + " " + (isActive ? styles.linkActive : "")
        }
      >
        Informations
      </NavLink>
    </div>
  );
};

export default Footer;
