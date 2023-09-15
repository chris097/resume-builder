import React from 'react'
import Cert from '../../public/svgs/cert'
import useQueryApi from '../../helpers/useQuery';
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import { SkeletonWorkHistory } from '../skeletonLoader';

const Certification = () => {

  const { data, isLoading } = useQueryApi(CONSTANT_TEXT.GET_USER_CERTIFICATE, apiUrls.USER_CERTIFICATE_URL);

  return (
    <div className='px-6 relative bg-white rounded-md h-auto'>
      <div className='font-poppins text-lg mb-3'>Certification</div>
      {data?.certificate?.map((cert:{title: string, title_url: string}) => (
        <>
          <div className='flex items-center mb-2'>
            {/* <Cert /> */}
            <span className='text-secondarygray text-sm font-sans'>
          {cert.title}
          {/* FreecodeCamp */}
            </span>
        </div>
        <div className='flex items-center'>
            <Cert />
            <span className='text-blue-500 w-[280px] break-words text-sm font-light cursor-pointer'>
              <a href='https://freecodecamp.org/certification/fcc86751ba2-fa40-416a-8dba-dd2965708422/javascript-algorithms-and-data-structures'>
                {cert.title_url}
            {/* https://freecodecamp.org/certification/fcc86751ba2-fa40-416a-8dba-dd2965708422/javascript-algorithms-and-data-structures */}
          </a>
            </span>
        </div>
        </>
      ))}
    
    </div>
  )
}

export default Certification