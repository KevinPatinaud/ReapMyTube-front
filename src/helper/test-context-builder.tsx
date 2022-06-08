import { IntlProvider } from "react-intl";
import { localMessages, supportedLocale } from "../locales";

export type Props = {
  children?: React.ReactNode;
};

const wrapper: React.FC<Props> = ({ children }) => (
  <IntlProvider
    locale={supportedLocale.French}
    messages={localMessages.get(supportedLocale.French)}
  >
    {children}
  </IntlProvider>
);

export default wrapper;
