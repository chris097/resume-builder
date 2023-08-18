import React, { ReactNode, useEffect, useState } from "react";
// import { boolean } from 'yup';
import { CONSTANT_TEXT } from "../constant";
import { apiUrls } from "../helpers/api/url";
import useQueryApi from "../helpers/useQuery";

type NavProps = {
  showNav: boolean;
  isLoading: boolean;
  isData?: any;
  toggleOpenNav: () => void;
  toggleCloseNav: () => void;
};

type Props = {
  children?: ReactNode;
};

const defaultState = {
  showNav: false,
  isLoading: true,
  isData: {},
  toggleOpenNav: () => {},
  toggleCloseNav: () => {},
};

export const dashboardContext = React.createContext<NavProps>(defaultState);

export const useDashboardContext = () => React.useContext(dashboardContext);

export const NavProvider = ({ children }: Props) => {
  //states
  const [showNav, setShowNav] = useState<boolean>(defaultState.showNav);
  const [isData, setData] = useState<object>({});
  //query
  const { data, isLoading } = useQueryApi([CONSTANT_TEXT.GET_ABOUT], apiUrls.USER_INFO);

  //functions
  const toggleOpenNav = () => {
    setShowNav(true);
  };

  const toggleCloseNav = () => {
    setShowNav(false);
  };

  useEffect(() => {
    setData(data?.data);
  }, [data, isLoading]);

  const values = {
    showNav,
    isLoading,
    isData,
    toggleOpenNav,
    toggleCloseNav,
  };

  return <dashboardContext.Provider value={values}>{children}</dashboardContext.Provider>;
};
