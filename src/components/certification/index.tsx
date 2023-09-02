import React from 'react'
import Cert from '../../public/svgs/cert'

const Certification = () => {
  return (
    <div className='px-6 w-full relative bg-white rounded-md h-auto'>
        <div className='font-medium text-lg mb-3'>Certification</div>
        <div className='flex items-center mb-2'>
            {/* <Cert /> */}
            <span className='text-secondarygray text-sm font-semibold'>
           JavaScript Algorithms and Data Structures
            </span>
        </div>
        <div className='flex items-center mb-2'>
            <Cert />
            <span className='text-blue-500 text-sm font-light cursor-pointer'>
          <a href='https://freecodecamp.org/certification/fcc86751ba2-fa40-416a-8dba-dd2965708422/javascript-algorithms-and-data-structures'>Freecodecamp</a>
            </span>
        </div>
    </div>
  )
}

export default Certification