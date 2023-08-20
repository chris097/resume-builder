import React from "react";
import { ROUTE_URL } from "./url";
const RegisterOrLogin = React.lazy(() => import("../pages/private/RegisterOrLogin"));

type PrivateProps = {
  path: string;
  element: any;
};

export const privateRoutes: PrivateProps[] = [
  {
    path: ROUTE_URL.LOGIN_URL,
    element: RegisterOrLogin,
  }
];
