import { FC, useContext } from "react";
import { supportedLocales } from "../../locales";
import styles from "./LanguageButton.module.css";
import { CircleFlag } from "react-circle-flags";
import { useIntl } from "react-intl";
import { SwitchLanguageContext } from "../../providers/IntlProvider";

const LanguageButton: FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.divLanguage}>
      <LanguageBtn
        countryCode="gb"
        languageBtn={supportedLocales.English}
        currentLanguage={intl.locale}
      />
      <LanguageBtn
        countryCode="fr"
        languageBtn={supportedLocales.French}
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
  const switchLanguage = useContext(SwitchLanguageContext);
  return (
    <CircleFlag
      data-testid={countryCode}
      countryCode={countryCode}
      height={currentLanguage === languageBtn ? "35" : "30"}
      className={styles.btnLanguage}
      onClick={() => {
        console.log("LanguageBtn : " + languageBtn);
        switchLanguage(languageBtn);
      }}
    />
  );
};

export default LanguageButton;
