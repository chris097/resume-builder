import React from 'react';
import logo from "../../public/images/cev.png";

const Loader = () => {
    return (
        <div className="flex justify-center h-screen items-center w-full">
            <img className="w-44 h-44animate-pulse" src={logo} alt="app logo" />
        </div>
    );
};

export default Loader;