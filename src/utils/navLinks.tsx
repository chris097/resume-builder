import { ReactNode } from 'react';
import { FiMenu } from 'react-icons/fi';
import { HiUserGroup, HiPencil } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
// import { FaDownload } from 'react-icons/fa';
import { ROUTE_URL } from "../routes/url";

type NavLinkProps = {
    name: string;
    icon: ReactNode;
    to: string
}

export const navLinks: NavLinkProps[] = [
    {
        name: "Professional Summary",
        icon: <FiMenu size="16px" />,
        to: ROUTE_URL.PROFESSION_SUMMARY_URL
    },
    {
        name: "Work History",
        icon: <HiUserGroup size="16px" />,
        to: ROUTE_URL.WORK_HISTORY_URL
    },
    {
        name: "Technical Skills",
        icon: <HiPencil size="16px" />,
        to: ROUTE_URL.TECHNICAL_SKILL_URL
    },
    {
        name: "Education",
        icon: <FaGraduationCap size="16px" />,
        to: ROUTE_URL.EDUCATION_URL
    },
    {
        name: "Certification & Hobbies",
        icon: <BsFillAwardFill size="16px" />,
        to: ROUTE_URL.PROFESSION_SUMMARY_URL
    },
];
