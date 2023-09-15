import React from 'react'
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery';
import { SkeletonWorkHistory } from '../skeletonLoader';

const WorkHistory = () => {

  const { data, isLoading } = useQueryApi(CONSTANT_TEXT.GET_USER_EXPERIENCE, apiUrls.USER_EXPERIENCE_URL);

  return (
    <div className='bg-white w-full rounded-md h-auto px-6 pt-7 pb-0.5'>
      <div id="pdf" className='text-lg mb-3 font-poppins'>WORK HISTORY</div>
      {isLoading ? <SkeletonWorkHistory /> : data?.data?.map((user:any, index:number) => (
        <div key={index} className='mb-6 border-b last:border-none border-gray-100 pb-6'>
          <div className='text-secondarygray capitalize'>{user.job_title} | {user.company}</div>
          <div className='text-secondarygray font-light text-sm'>{user.start_date} - {user.end_date}</div>
          <div className='text-secondarygray mt-5 text-sm font-light font-sans'>
            {user.description}
            {/* A foremost payment gateway platform that help merchant grow their business and cater to a global audience. I developed and delivered features such as:
            Virtual account, SMS alert notifications, deposit/withdraw account, business owner verification, business document upload, POS, payments/transactions via QRCode. */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;