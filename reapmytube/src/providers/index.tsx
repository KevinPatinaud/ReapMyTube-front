import { FC } from "react";
import IntlProvider from "./IntlProvider";
import RouterProvider from "./RouterProvider";

const AppProviders: FC<{ children: JSX.Element }> = (props) => {
  return (
    <IntlProvider>
      <RouterProvider>{props.children}</RouterProvider>
    </IntlProvider>
  );
};

export default AppProviders;
