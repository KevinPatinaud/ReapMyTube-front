import { FC, Suspense, lazy } from "react";
import { useIntl } from "react-intl";
import { supportedLocales } from "../../locales";

const EnInfo = lazy(() => import("./Information.en"));
const FrInfo = lazy(() => import("./Information.fr"));

const InformationPage: FC = () => {
  const intl = useIntl();
  return (
    <>
      <Suspense>
        {intl.locale === supportedLocales.French && <FrInfo />}
        {intl.locale === supportedLocales.English && <EnInfo />}
      </Suspense>
    </>
  );
};

export default InformationPage;
