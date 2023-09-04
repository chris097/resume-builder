import React, { useState } from 'react';
import Input from '../input';

const UserExperience = () => {

    const [current, setCurrentWork] = useState<boolean>(true);

console.log(current)
    return (
        <div>
            <div className='mt-10'>
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full px-3 focus:outline-none border border-[#E4E7EB] bg-white bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Company'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "Yep, Nigeria"
                    }}
                />
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full px-3 focus:outline-none border border-[#E4E7EB] bg-white bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Role'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "Frontend Developer"
                    }}
                />
            </div>
            <div className='mt-3 flex'>
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full px-3 focus:outline-none border border-[#E4E7EB] bg-white bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Start Month'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "March"
                    }}
                />
              <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex gap-3 items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full px-3 focus:outline-none border border-[#E4E7EB] bg-white bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal ml-3'
                    label='Start Year'
                    container='w-full space-x-3'
                    input={{
                        type: "text",
                        placeholder: "2022"
                    }}
                />
            </div>
            {current && <div className='mt-3 flex'>
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full px-3 focus:outline-none border border-[#E4E7EB] bg-white bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='End Month'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "April"
                    }}
                />
                {current && <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex gap-3 items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full px-3 focus:outline-none border border-[#E4E7EB] bg-white bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal ml-3'
                    label='End Year'
                    container='w-full space-x-3'
                    input={{
                        type: "text",
                        placeholder: "2023"
                    }}
                />}
            </div>}
            <div className='mt-3 w-full'>
                <label className="text-xs text-coregray">Description</label>
                <textarea
                    // onChange={formik.handleChange}
                    name='description'
                    // value={formik.values.bio}
                    className="w-full h-28 flex items-center border border-[#E4E7EB] bg-white  px-3 py-2 outline-none text-basegray text-xs rounded mt-1"
                />
            </div>
            <div className='flex items-center mt-2 space-x-2'>
                <Input
                    handleClick=""
                    icon=""
                    inputContainer=''
                    inputStyle=''
                    labelStyle='text-xs text-coregray'
                    label=''
                    container=''
                    input={{
                        type: "checkbox",
                        placeholder: "April 2023",
                        name: 'current',
                        // value: !current,
                        onChange: () => setCurrentWork(!current)
                    }}
                />
                <p className='text-[10px] text-coregray'>Currently working</p>
            </div>
            <button
                className="bg-corered text-white hover:bg-black/5 text-sm font-opensans w-full py-3 mt-10"
                type="submit"
            >
                Next
            </button>
        </div>
    );
};

export default UserExperience;