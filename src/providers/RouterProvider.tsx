import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

const RouterProvider: FC<{ children: JSX.Element }> = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {props.children}
    </BrowserRouter>
  );
};

export default RouterProvider;
