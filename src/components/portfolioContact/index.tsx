import React from 'react'
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery';
import Linkedin from '../../public/svgs/linkedin';
import Mail from '../../public/svgs/mail';
import Phone from '../../public/svgs/phone';
import Portfolio from '../../public/svgs/portfolio';
import Twitter from '../../public/svgs/twitter';

const PortfolioContact = () => {
  
  //query
  const { data, isLoading } = useQueryApi([CONSTANT_TEXT.GET_ABOUT], apiUrls.USER_INFO);
  const contact = data?.data[0];

  return (
    <div className='px-6 pt-7 pb-4 bg-white w-full mb-5 md:mb-0 rounded-md h-auto'>
      {isLoading ? 'Loading...' : <><div className='font-medium text-xl mb-5'>{`PORTFOLIO & CONTACT`}</div>
            {/* <div className='flex items-center space-x-1 mb-3'>
              <Mail />
              <span className='text-secondarygray text-sm font-light'>
                {contact?.email || 'Your email address'}
              </span>
            </div> */}
            <div className='flex items-center space-x-1 mb-3'>
              <Twitter />
              <span className='text-secondarygray text-sm font-light'>
                {contact?.twitter || 'Your twitter link'}
              </span>
            </div>
            <div className='flex items-center space-x-1 mb-3'>
              <Linkedin />
              <span className='text-secondarygray text-sm font-light'>
                {contact?.linkedin || 'Your linkedin link'}
              </span>
            </div>
            <div className='flex items-center space-x-1 mb-3'>
              <Portfolio />
              <span className='text-secondarygray text-sm font-light'>
              { contact?.website || 'Your portfolio link'}
              </span>
            </div>
            {/* <div className='flex items-center space-x-1 mb-3'>
              <Phone />
              <span className='text-secondarygray text-sm font-light'>
            {contact?.phone || 'Your phone number'}
              </span>
            </div> */}
      </>}
          </div>
  )
}

export default PortfolioContact;