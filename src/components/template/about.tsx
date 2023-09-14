// import { useState } from 'react';
import Avatar from '../../public/svgs/avatar'
import useQueryApi from '../../helpers/useQuery';
import { apiUrls } from '../../helpers/api/url';
import { SkeletonAbout } from '../skeletonLoader';
import { CONSTANT_TEXT } from '../../constant';
import { Fragment } from 'react';
// import { SkeletonAbout } from '../skeletonLoader';

interface IProps {
  fullname: string
  phone: string
  email: string
  portfolio: string
  address: string
  bio: string
}

const About = () => {

  const { data, isLoading } = useQueryApi(CONSTANT_TEXT.GET_USER_INFO, apiUrls.USER_INFO);

  return (
    <div className='bg-white w-full p-4 rounded-md'>
      <div className='flex space-x-3'>
        {isLoading ? <SkeletonAbout /> : (!data?.data?.length ? <>
            <Avatar width='45' height='45' />
            <div>
              <div>
                <div className='text-lg capitalize font-poppins'>Chrisian Chiemela</div>
                {/* <input className='hover:outline-dotted w-1/2' onChange={e => setName(e.target.value)} value={name} /> */}
                <div className='font-light flex font-sans text-sm gap-1.5 text-basegray'>
                  <span>+2347015362583</span> |
                  <span>chrisfidel.international@gmail.com</span> |
                  <span>https://christianchiemela.vercel.app/</span>
                </div>
                <div className='font-light text-sm text-basegray capitalize'></div>
              </div>
              <div className='mt-2'>
                <div className='text-sm font-poppins'>ADDRESS</div>
                <div className='font-light text-sm font-sans text-basegray'>10 deji odunuga Street, anthony village, Lagos Nigeria.</div>
              </div>
              <div className='mt-2'>
                <div className='text-sm font-sans'>BIO</div>
                <div className='font-light text-sm font-sans text-basegray capitalize'>
                  Experience Frontend developer with 3years production experience in frontend developer in reactjs and javascript  production experience in frontend developer in reactjs and javascript.
                </div>
              </div>
            </div>
          </> : data?.data?.map((info: IProps, index: number) => (
          <Fragment key={index}>
            <Avatar width='60' height='61' />
            <div>
              <div>
                <div className='text-xl'>{info.fullname}</div>
                <div className='font-light flex text-sm gap-2 text-basegray'>
                    <span>{info.phone}</span> |
                  <span>{info.email}</span> |
                  <span>{info.portfolio}</span>
                </div>
                <div className='font-light text-sm text-basegray capitalize'></div>
              </div>
              <div className='mt-2'>
                <div className='text-md'>ADDRESS</div>
                <div className='font-light text-sm text-basegray capitalize'>{info.address}</div>
              </div>
              <div className='mt-2'>
                <div className='text-md'>Bio</div>
                <div className='font-light text-sm text-basegray capitalize'>
                  {info.bio}
                </div>
              </div>
            </div>
          </Fragment>
        )))}
      </div>
    </div>
  );
};

export default About;