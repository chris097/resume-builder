import React from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayout";
import Home from "../pages/Home";
import { ROUTE_URL } from "./url";
const Education = React.lazy(() =>  import("../pages/Education"));
const ProfessionalSummary = React.lazy(() => import("../pages/ProfessionalSummary"));
const TechnicalSkills = React.lazy(() => import("../pages/TechnicalSkills"));
const WorkHistory =  React.lazy(() => import("../pages/WorkHistory"));
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
    {
        path: ROUTE_URL.PROFESSION_SUMMARY_URL,
        element: ComposeInternalLayouts(ProfessionalSummary)
    },
    {
        path: ROUTE_URL.EDUCATION_URL,
        element: ComposeInternalLayouts(Education)
    },
    {
        path: ROUTE_URL.TECHNICAL_SKILL_URL,
        element: ComposeInternalLayouts(TechnicalSkills)
    },
    {
        path: ROUTE_URL.WORK_HISTORY_URL,
        element:ComposeInternalLayouts( WorkHistory)
    }
]