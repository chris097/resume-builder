import React from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayout";
import Home from "../pages/Home";
import { ROUTE_URL } from "./url";
const Resume = React.lazy(() => import("../pages/Template"));


type PublicRouteProps = {
    path: string
    element: any
};

export const publicRoutes: PublicRouteProps[] = [
    {
        path: ROUTE_URL.NOT_FOUND,
        element: Home
    },
    {
        path: ROUTE_URL.HOME_URL,
        element: Home
    },
    {
        path: ROUTE_URL.RESUME_URL,
        element: ComposeInternalLayouts(Resume)
    },
]