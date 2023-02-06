import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const BottomResume = () => {

  return (
    <div className='border-gray-150 border bg-white shadow-shadowbase rounded w-full h-auto pt-6 px-5'>
              <div className=''>
                <div className='text-xl font-light'>Work History</div>
                <div>
                  <div className='mb-3 border-b last:border-none border-gray-100 pb-6'>
            <div className='text-secondarygray capitalize mt-5 flex'>
              <TypeAnimation
                cursor={false}
                repeat={Infinity}
                sequence={['Frontend Developer', 1000, 'Software Developer', 1000, "Cloud Engineer", 1000]}
              /> <span className='ml-1'>| Yep!, USA</span>
            </div>
                    <div className='text-secondarygray font-light text-sm'>March 2022 - Present</div>
                    <p className='text-secondarygray mt-5 text-sm font-light'>
              I am <span className=' inline-block'><TypeAnimation
                sequence={["Christian Chiemela", 2000, "Agu Chukwuemka", 2000, "Demilade Lala", 2000]}
                repeat={Infinity}
              /></span> a <span className=' inline-block'><TypeAnimation
                sequence={["frontend developer", 2000, "software developer", 2000, "cloud engineer", 2000]}
                repeat={Infinity}
              /></span> , a Nigerian with the passion for creating stunning and user-friendly
              websites and applications. With 3years plus experience in the industry, I have honed skills in HTML, CSS, Javascript,
              as well as modern frontend frameworks such as ReactJs And VueJs.
                    </p>
                    <p className='text-secondarygray mt-5 text-sm font-light'>
              I began my career at Esoft response a United Kingdom base company where I quickly develop the interest in frontend development.
              Years later I moved to YEP! a United States of America base company where I am responsible for
              the development and maintenance of several high-traffic websites.
                    </p>
                    <p className='text-secondarygray mt-5 text-sm font-light'>
                     I have the ability of turning complex design concepts into highly optimised and accessible user interfaces, which are up to date with the latest trends and technologies in the industry. I am always looking for ways to improve the user experience and performance of my projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default BottomResume