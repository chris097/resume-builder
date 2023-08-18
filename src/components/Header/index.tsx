import React from 'react';
import { FiMenu } from "react-icons/fi";
import { useDashboardContext } from '../../context/dashboardContext';
import Logo from '../../public/svgs/Logo';


const Header = () => {

    const { toggleOpenNav } = useDashboardContext();

    const handleCloseNav = () => toggleOpenNav();
    
    return (
        <div className='font-opensans bg-white shadow w-full fixed top-0 left-0'>
            <div className='h-20 flex items-center max-w-6xl justify-between md:w-full w-[90%] mx-auto'>
            <div className='flex gap-3 items-center md:w-full w-[90%] mx-auto'>
            <span onClick={handleCloseNav} className='cursor-pointer block md:hidden'><FiMenu size={26} /></span>
               <Logo width='134' height='40' />
            </div>
            <div className='whitespace-nowrap text-sm text-secondarygray bg-primarygray p-3 rounded'>Share</div>
        </div>
        </div>
    )
};

export default Header;