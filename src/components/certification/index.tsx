import React from 'react'
import Cert from '../../public/svgs/cert'

const Certification = () => {
  return (
    <div className='px-6 py-7 w-full bg-white rounded-md h-[164.74px]'>
        <div className='font-medium text-xl mb-5'>Certification</div>
        <div className='flex items-center space-x-3 mb-2'>
            <Cert />
            <span className='text-secondarygray text-sm font-light'>
            Product Design
            </span>
        </div>
        <div className='flex items-center space-x-3 mb-2'>
            <Cert />
            <span className='text-secondarygray text-sm font-light'>
            Product Design
            </span>
        </div>
    </div>
  )
}

export default Certification