import React from 'react'
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery';
import dateFormat from '../dateFormat';
import { SkeletonWorkHistory } from '../skeletonLoader';

const WorkHistory = () => {

  return (
    <div className='bg-white w-full rounded-md h-auto px-6 pt-7 pb-0.5'>
      <div id="pdf" className='font-medium text-lg mb-3'>WORK HISTORY</div>
      <div className='mb-6 border-b last:border-none border-gray-100 pb-6'>
        <div className='text-secondarygray capitalize'>Frontend Developer | Yep!, Nigeria</div>
        <div className='text-secondarygray font-light text-sm'>April 2021 - January 2013</div>
        <div className='text-secondarygray mt-5 text-sm font-light'>
          A foremost payment gateway platform that help merchant grow their business and cater to a global audience. I developed and delivered features such as:
          Virtual account, SMS alert notifications, deposit/withdraw account, business owner verification, business document upload, POS, payments/transactions via QRCode.
        </div>
      </div>
      <div className='mb-6 border-gray-100 pb-6'>
        <div className='text-secondarygray capitalize'>Frontend Developer | Yep!, Nigeria</div>
        <div className='text-secondarygray font-light text-sm'>April 2021 - January 2013</div>
        <div className='text-secondarygray mt-5 text-sm font-light'>
           A foremost payment gateway platform that help merchant grow their business and cater to a global audience. I developed and delivered features such as:
          Virtual account, SMS alert notifications, deposit/withdraw account, business owner verification, business document upload, POS, payments/transactions via QRCode.
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;