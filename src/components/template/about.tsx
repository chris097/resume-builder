import { useState } from 'react';
import Avatar from '../../public/svgs/avatar'
// import { SkeletonAbout } from '../skeletonLoader';

const About = () => {

  const [name, setName] = useState<string>("Christian Chiemela");

  return (
    <div className='bg-white w-full p-4 rounded-md'>
        <div className='flex space-x-5'>
          <Avatar width='60' height='61' />
          <div>
            <div>
            <div className='text-xl capitalize'>Christian Chiemela</div>
            {/* <input className='hover:outline-dotted w-1/2' onChange={e => setName(e.target.value)} value={name} /> */}
            <div className='font-light flex text-sm gap-2 text-basegray'>
              <span>+2347015362583</span> |
              <span>chrisfidel.international@gmail.com</span> |
              <span>https://christianchiemela.vercel.app/</span>
            </div>
            <div className='font-light text-sm text-basegray capitalize'></div>
              </div>
            <div className='mt-2'>
              <div className='text-md'>ADDRESS</div>
              <div className='font-light text-sm text-basegray capitalize'>10 Deji Odunuga Street, Anthony Village, Lagos Nigeria.</div>
            </div>
            <div className='mt-2'>
              <div className='text-md'>Bio</div>
              <div className='font-light text-sm text-basegray capitalize'>
                Experience Frontend developer with 3years production experience in frontend developer in reactjs and javascript.
              </div>
            </div>
          </div>
          </div>
    </div>
  )
};

export default About;