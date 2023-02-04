import React, { useState } from 'react'
import Header from '../components/Header';
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import Input from '../components/input';
import { useNavigate } from 'react-router-dom';

const Education = () => {

    const navigate = useNavigate();

  return (
     <div>
          <div className='max-w-5xl mx-auto w-full my-8'>
            <button onClick={() => navigate(-1)}  className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
              <div className='max-w-4xl mx-auto'>
                <div className='font-light text-blue-700'>Tell us about your education</div>
                <div className='font-light text-basegray mb-8 my-3'>Include every school, even if you are still there or you didn't graduate</div>
                  <div className='flex space-x-4'>
                    <Input
                        label='School Name'
                        input={{
                            name: "firstName",
                            type: 'text',
                            id: "firstName"
                        }}
                    />
                    <Input
                        label='School Location'
                        input={{
                            name: "lastName",
                            type: 'text',
                            id: "lastName"
                        }}
                    />
                  </div>
                  <div className='mt-3'>
                      <Input
                        label='Degree'
                        input={{
                            name: "lastName",
                            type: 'text',
                            id: "lastName"
                        }}
                    />
                  </div>
                  <div className='flex space-x-4 mt-3'>
                    <Input
                        label='Field of Study'
                        input={{
                            name: "firstName",
                            type: 'text',
                            id: "firstName"
                        }}
                    />
                    <Input
                        label='Graduation Start Date'
                        input={{
                            name: "country",
                            type: 'date',
                            id: "lastName"
                        }}
                    />
                    <Input
                        label='Graduation End Date'
                        input={{
                            name: "country",
                            type: 'date',
                            id: "lastName"
                        }}
                    />
                  </div>
                  <div className='mt-3 text-basegray space-x-2 flex items-center'>
                      <input type='checkbox' />
                      <span className='text-sm font-light'>I currently attend here</span>
                  </div>
                  <div className='flex justify-between mt-16 font-light'>
                      <button type='button' className='border w-32 h-10'>Back</button>
                      <button className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>{`Save & Next`}</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Education