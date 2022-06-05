import { FC } from "react";
import LanguageBus from "../../bus/LanguageBus";
import { supportedLocale } from "../../locales";
import styles from "./LanguageButton.module.css";
import { CircleFlag } from "react-circle-flags";
import { useIntl } from "react-intl";

const LanguageButton: FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.divLanguage}>
      <CircleFlag
        countryCode="gb"
        height={intl.locale === supportedLocale.English ? "35" : "30"}
        className={styles.btnLanguage}
        onClick={() => {
          LanguageBus.dispatch({ language: supportedLocale.English });
        }}
      />

      <CircleFlag
        countryCode="fr"
        height={intl.locale === supportedLocale.French ? "35" : "30"}
        className={styles.btnLanguage}
        onClick={() => {
          LanguageBus.dispatch({ language: supportedLocale.French });
        }}
      />
    </div>
  );
};

export default LanguageButton;
