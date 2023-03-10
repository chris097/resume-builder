import React from 'react'
import Cert from '../../public/svgs/cert'

const Certification = () => {
  return (
    <div className='px-6 py-7 w-full bg-white rounded-md h-[192px]'>
        <div className='font-medium text-xl mb-5'>Certification</div>
        <div className='flex items-center space-x-3 mb-2'>
            <Cert />
            <span className='text-secondarygray text-sm font-semibold'>
           JavaScript Algorithms and Data Structures
            </span>
        </div>
        <div className='flex items-center space-x-3 mb-2'>
            <Cert />
            <span className='text-blue-500 text-sm font-light cursor-pointer'>
          https://freecodecamp.org/certification/fcc86751ba2-fa40-416a-8dba-dd2965708422/javascript-algorithms-and-data-structures
            </span>
        </div>
    </div>
  )
}

export default Certification