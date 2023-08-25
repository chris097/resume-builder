import React from 'react';
import { FiMenu } from "react-icons/fi";
import { useDashboardContext } from '../../context/dashboardContext';
import Logo from '../../public/svgs/Logo';


const Header = () => {

    const { toggleOpenNav } = useDashboardContext();

    const handleCloseNav = () => toggleOpenNav();
    
    return (
        <div className='font-opensans bg-white shadow w-full fixed top-0 left-0 z-50'>
            <div className='h-20 flex items-center justify-between w-[95%] mx-auto'>
                <div className='flex h-full items-center'>
                    <span onClick={handleCloseNav} className='cursor-pointer block md:hidden'><FiMenu size={26} /></span>
                    <Logo width='134' height='40' />
                    {/* <div className='text-xs text-basegray flex h-full items-center space-x-10 ml-32'>
                        <p>Resume Template</p>
                        <p>Cover Letter</p>
                        <p>Get Jobs</p>
                    </div> */}
                </div>
                <div className='whitespace-nowrap text-sm text-secondarygray bg-primarygray p-3 rounded'>Share</div>
            </div>
        </div>
    );
};

export default Header;