import React from 'react'

const Footer = () => {
  return (
      <div className='fixed w-full h-16 bottom-0 bg-primarygray'>
        <div className='h-full w-full mx-auto max-w-6xl'>
              <div className='flex justify-end items-center h-full'>
                <button className='text-white bg-red-500 w-28 h-9 hover:bg-red-700'>
                Save
                </button>
            </div>
        </div>
      </div>
  )
}

export default Footer;