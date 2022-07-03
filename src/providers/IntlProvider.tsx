import React from "react";
import { FC, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import { defaultLanguage, localMessages, supportedLocales } from "../locales";

export const SwitchLanguageContext = React.createContext<
  (language: string) => void
>(() => {});

const IntlProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    let lang = navigator.language.split(/[-_]/)[0];

    if (!Object.values(supportedLocales).includes(lang)) lang = defaultLanguage;

    return lang;
  });

  const switchLanguage = (language: string): void => {
    if (!Object.values(supportedLocales).includes(language))
      language = defaultLanguage;
    setLocale(language);
  };

  return (
    <ReactIntlProvider locale={locale} messages={localMessages.get(locale)}>
      <SwitchLanguageContext.Provider value={switchLanguage}>
        {children}
      </SwitchLanguageContext.Provider>
    </ReactIntlProvider>
  );
};

export default IntlProvider;
