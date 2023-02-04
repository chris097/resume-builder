import React, { ReactNode, useState} from 'react';

type NavProps = {
  showNav: boolean;
  toggleOpenNav: () => void;
  toggleCloseNav: () => void;
}

type Props ={
  children?: ReactNode;
}

const defaultState = {
  showNav: false,
  toggleOpenNav: () => { },
  toggleCloseNav: () => {},
};

export const navContext = React.createContext<NavProps>(defaultState);

export const useNavContext = () => React.useContext(navContext);

export const NavProvider = ({ children }: Props) => {
  //states
  const [showNav, setShowNav] = useState<boolean>(defaultState.showNav);
  //functions
  const toggleOpenNav = () => {
    setShowNav(true)
  };
  
  const toggleCloseNav = () => {
    setShowNav(false)
  }

  const values = {
    showNav,
    toggleOpenNav,
    toggleCloseNav
  };

  return (
    <navContext.Provider value={values}>
      {children}
    </navContext.Provider>
  )
};
