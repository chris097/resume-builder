import React from "react";
import { ROUTE_URL } from "./url";
const Register = React.lazy(() => import("../pages/private/Register"));
const Login = React.lazy(() => import("../pages/private/Login"));

type PrivateProps = {
    path: string,
    element: any
}

export const privateRoutes: PrivateProps[] = [
    {
        path: ROUTE_URL.LOGIN_URL,
        element: Login
    },
    {
        path: ROUTE_URL.REGISTER_URL,
        element: Register
    },
]