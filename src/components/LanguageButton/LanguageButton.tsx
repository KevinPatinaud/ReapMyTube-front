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
      <LanguageBtn
        countryCode="gb"
        languageBtn={supportedLocale.English}
        currentLanguage={intl.locale}
      />
      <LanguageBtn
        countryCode="fr"
        languageBtn={supportedLocale.French}
        currentLanguage={intl.locale}
      />
    </div>
  );
};

const LanguageBtn: FC<{
  countryCode: string;
  languageBtn: string;
  currentLanguage: string;
}> = ({ countryCode, languageBtn, currentLanguage }) => {
  return (
    <CircleFlag
      data-testid={countryCode}
      countryCode={countryCode}
      height={currentLanguage === languageBtn ? "35" : "30"}
      className={styles.btnLanguage}
      onClick={() => {
        LanguageBus.dispatch({ language: languageBtn });
      }}
    />
  );
};

export default LanguageButton;
