import { FC, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import LanguageBus from "../bus/LanguageBus";
import { defaultLanguage, localMessages, supportedLocale } from "../locales";

const IntlProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    let lang = navigator.language.split(/[-_]/)[0];

    if (!Object.values(supportedLocale).includes(lang)) lang = defaultLanguage;

    return lang;
  });

  LanguageBus.on((language: string) => {
    if (!Object.values(supportedLocale).includes(language))
      language = defaultLanguage;
    setLocale(language);
  });

  return (
    <ReactIntlProvider locale={locale} messages={localMessages.get(locale)}>
      {children}
    </ReactIntlProvider>
  );
};

export default IntlProvider;
