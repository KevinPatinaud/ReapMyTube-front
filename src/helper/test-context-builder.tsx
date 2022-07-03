import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { localMessages, supportedLocales } from "../locales";

export type Props = {
  children?: React.ReactNode;
};

const wrapper: React.FC<Props> = ({ children }) => {
  return (
    <IntlProvider
      locale={supportedLocales.French}
      messages={localMessages.get(supportedLocales.French)}
    >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {children}
      </BrowserRouter>
    </IntlProvider>
  );
};

export default wrapper;
