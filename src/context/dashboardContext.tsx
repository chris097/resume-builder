import React, { ReactNode, useState } from "react";
import useQueryApi from "../helpers/useQuery";
// import { boolean } from 'yup';
// import { CONSTANT_TEXT } from "../constant";
// import { apiUrls } from "../helpers/api/url";
// import useQueryApi from "../helpers/useQuery";

type NavProps = {
  showNav: boolean;
  // isLoading: boolean;
  // data: any
  isData?: any;
  toggleOpenNav: () => void;
  toggleCloseNav: () => void;
};

type Props = {
  children?: ReactNode;
};

const defaultState = {
  showNav: false,
  // isLoading: true,
  isData: {},
  // data: [],
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
  // const { data, isLoading } = useQueryApi("all_info", "user/infrormation");

  //functions
  const toggleOpenNav = () => {
    setShowNav(true);
  };

  const toggleCloseNav = () => {
    setShowNav(false);
  };

  // useEffect(() => {
  //   setData(data?.data);
  // }, [data, isLoading]);

  const values = {
    showNav,
    // isLoading,
    // data,
    isData,
    toggleOpenNav,
    toggleCloseNav,
  };

  return <dashboardContext.Provider value={values}>{children}</dashboardContext.Provider>;
};
