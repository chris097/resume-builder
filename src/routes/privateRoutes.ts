import React from "react";
import { ROUTE_URL } from "./url";
const Register = React.lazy(() => import("../pages/private/Register"));
const Login = React.lazy(() => import("../pages/private/Login"));
// const ForgotPassword = React.lazy(() => import("../pages/private/ForgotPassword"));

type PrivateProps = {
  path: string;
  element: any;
};

export const privateRoutes: PrivateProps[] = [
  {
    path: ROUTE_URL.LOGIN_URL,
    element: Login,
  },
  {
    path: ROUTE_URL.REGISTER_URL,
    element: Register,
  },
  // {
  //   path: ROUTE_URL.FORGOT_PASSWORD,
  //   element: ForgotPassword,
  // },
];
