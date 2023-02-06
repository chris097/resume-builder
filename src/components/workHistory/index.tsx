import React from 'react'
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery';
import dateFormat from '../dateFormat';
import { SkeletonWorkHistory } from '../skeletonLoader';

const WorkHistory = () => {
  const { data, isLoading } = useQueryApi([CONSTANT_TEXT.GET_WORK_HISTORY], apiUrls.WORK_HISTORY);
  const works: [] = data?.data?.history;

  console.log('works:',works)

  return (
    <div className='flex-1 bg-white rounded-md h-auto px-6 pt-7 pb-0.5'>
          <div id="pdf" className='font-medium text-xl mb-5'>WORK HISTORY</div>
      {isLoading ? <div>
        <SkeletonWorkHistory />
      </div> : works?.map((work:any, index:any) => (
          <div key={index} className='mb-6 border-b last:border-none border-gray-100 pb-6'>
          <div className='text-secondarygray capitalize'>{work.title} | {work.employer}, Nigeria</div>
            <div className='text-secondarygray font-light text-sm'>{dateFormat(work.start_date)} - Present</div>
            <div className='text-secondarygray mt-5 text-sm font-light'>
              {work.description}
            </div>
          </div>
      ))}
    </div>
  )
}

export default WorkHistory;