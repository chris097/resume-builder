import React from "react";
import { CONSTANT_TEXT } from "../../constant";
// import { useDashboardContext } from '../../context/dashboardContext';
import { apiUrls } from "../../helpers/api/url";
import useQueryApi from "../../helpers/useQuery";
import Linkedin from "../../public/svgs/linkedin";
import Mail from "../../public/svgs/mail";
import Phone from "../../public/svgs/phone";
import Portfolio from "../../public/svgs/portfolio";
import Twitter from "../../public/svgs/twitter";
import { SkeletonWorkHistory } from "../skeletonLoader";

const PortfolioContact = () => {
  const { data, isLoading } = useQueryApi([CONSTANT_TEXT.GET_WORK_HISTORY], apiUrls.USER_INFO);
  const userFile: [] = data?.data?.user;

  return (
    <div className='px-6 pt-7 pb-4 bg-white mb-5 md:mb-0 rounded-md h-auto'>
      <div className='font-medium text-xl mb-5'>{`PORTFOLIO & CONTACT`}</div>
             <div className='flex items-center space-x-1 mb-3'>
              <Mail />
              <span className='text-secondarygray text-sm font-light'>
                email
              </span>
            </div>
            <div className="flex items-center space-x-1 mb-3">
              <Twitter />
              <span className='text-secondarygray text-sm font-light'>
                twitter
              </span>
            </div>
            <div className="flex items-center space-x-1 mb-3">
              <Linkedin />
              <span className='text-secondarygray text-sm font-light'>
                linkedin
              </span>
            </div>
            {/* <div className='flex items-center space-x-1 mb-3'>
              <Portfolio />
              <span className='text-secondarygray text-sm font-light'>
              chris.info
              </span>
            </div>
            <div className="flex items-center space-x-1 mb-3">
              <Phone />
              <span className='text-secondarygray text-sm font-light'>
            07014748947
              </span>
            </div>  */}
          </div>
  )
}

export default PortfolioContact;
