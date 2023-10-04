import React, { lazy } from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayout";
import { ROUTE_URL } from "./url";
const Home = lazy(() => import("../pages/Home"));
const Resume = lazy(() => import("../pages/Template"));
const FinalResume = lazy(() => import("../pages/Template/FinalResume"));



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
    {
        path: ROUTE_URL.COMPLETE_RESUME_URL,
        element: ComposeInternalLayouts(FinalResume)
    },
]