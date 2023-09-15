import React from 'react';
import logo from "../../public/images/cev.png";

const Loader = () => {
    return (
        <div className="flex justify-center h-screen items-center w-full">
            <div className='w-44 h-44 animate-pulse'>
                <img className="w-full h-full" src={logo} alt="app logo" />
            </div>
        </div>
    );
};

export default Loader;