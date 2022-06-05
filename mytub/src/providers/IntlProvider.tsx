import { FC, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import LanguageBus from "../bus/LanguageBus";
import { defaultLanguage, localMessages, supportedLocale } from "../locales";

const IntlProvider: FC<{ children: JSX.Element }> = (props) => {
  const [locale, setLocale] = useState(() => {
    let lang = navigator.language.split(/[-_]/)[0];

    if (!Object.values(supportedLocale).includes(lang)) lang = defaultLanguage;

    return lang;
  });

  LanguageBus.on((data: CustomEvent) => {
    let lang = data.detail.language;

    if (!Object.values(supportedLocale).includes(lang)) lang = defaultLanguage;
    setLocale(lang);
  });

  return (
    <ReactIntlProvider locale={locale} messages={localMessages.get(locale)}>
      {props.children}
    </ReactIntlProvider>
  );
};

export default IntlProvider;
