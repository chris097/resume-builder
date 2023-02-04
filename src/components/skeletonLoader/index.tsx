import React from 'react'

export const SkeletonAbout = () => {
  return (
      <div className='flex space-x-5'>
          <div className='bg-gray-200 w-14 h-14 rounded-full'></div>
          <div className='space-y-5'>
            <div className='bg-gray-200 w-32 h-4 rounded-full animate-pulse'></div>
            <div className='bg-gray-200 w-40 h-4 rounded-full animate-pulse'></div>
          <div className='mt-2 flex space-x-3'>
            <div className='bg-gray-200 w-32 h-4 rounded-full animate-pulse'></div>
            <div className='bg-gray-200 w-52 h-4 rounded-full animate-pulse'></div>
          </div>
          <div className='space-y-6'>
            <div className='bg-gray-200 w-28 h-4 rounded-full animate-pulse'></div>
            <div className='font-light text-sm text-basegray flex space-x-3'>
            <div className='bg-gray-200 w-32 h-4 rounded-full animate-pulse'></div>
            <div className='bg-gray-200 w-32 h-4 rounded-full animate-pulse'></div>
            <div className='bg-gray-200 w-52 h-4 rounded-full animate-pulse'></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export const SkeletonWorkHistory = () => {
    return (
        <>
         <div className='mb-6 border-b border-gray-100 pb-6'>
            <div className='space-y-3'>
                <div className='bg-gray-200 w-64 h-4 rounded-full animate-pulse'></div>
                <div className='bg-gray-200 w-24 h-4 rounded-full animate-pulse'></div>
            </div>
            <div className='mt-5 space-y-3'>
                <div className='flex space-x-3'>
                    <div className='bg-gray-200 w-24 h-4 rounded-full animate-pulse'></div>
                    <div className='bg-gray-200 w-24 h-4 rounded-full animate-pulse'></div>
                    <div className='bg-gray-200 w-14 h-4 rounded-full animate-pulse'></div>
               </div>
                <div className='bg-gray-200 w-24 h-4 rounded-full animate-pulse'></div>
            </div>
            </div>
            </>
    )
}
