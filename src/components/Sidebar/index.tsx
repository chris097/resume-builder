import Logo from '../../public/svgs/Logo';
import {IoCloseOutline} from 'react-icons/io5'
import { useNavContext } from '../../context/navContext';
import { navLinks } from '../../utils/navLinks';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const { toggleCloseNav } = useNavContext();
    
    const handleCloseNav = () => toggleCloseNav();

  return (
      <div className='bg-white border border-l block md:hidden z-50 flex-col items-center h-screen w-2/5 fixed top-0 left-0'>
          <div className='h-20 border-b w-full z-50 flex justify-between px-6 items-center'>
              <Logo width='122' height='32' />
              <span className='cursor-pointer' onClick={handleCloseNav}><IoCloseOutline size={28} color="#393E4D" /></span>
          </div>
          <div className='w-[255px]'>
          <div className='border-b py-4 w-full px-6 text-basegray'>Personal Information</div>
          <div className='mt-6 text-sm px-6 text-basegray'>RESUME SECTION</div>
          <div className='mt-4 flex px-6 flex-col space-y-3'>
            {navLinks.map((navLink, index) => (
             <Link to={navLink.to} key={index} className='text-sm  font-light hover:text-red-500 cursor-pointer flex items-center space-x-2'>
                    <div className='flex mt-3 items-center gap-3'>
                        <div>{navLink.icon}</div>
                <div>{navLink.name}</div>
                </div>
            </Link>
            ))}
          </div>
          {/* <button onClick={props.handlePrint} type='button' className='text-sm border-t mt-8 py-3 font-light hover:text-red-500 cursor-pointer flex space-x-2'>
              <div><FaDownload size="16px"  /></div>
              <div>Download</div>
            </button> */}
        </div>
      </div>
  )
}

export default Sidebar;