import React, { useState } from 'react'
import Input from '../input';

const Education = () => {

    const [current, setCurrentWork] = useState<boolean>(true);

    return (
        <div className='mt-10'>
            {/* <div className='mt-3 flex space-x-3'> */}
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-white border px-3 border-[#E4E7EB] bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='School Name'
                    container='w-full mt-3'
                    input={{
                        type: "text",
                        placeholder: "University of Lagos"
                    }}
                />
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='School Location'
                    container='w-full mt-3'
                    input={{
                        type: "text",
                        placeholder: "Lagos"
                    }}
                />
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Feild/Program'
                    container='w-full mt-3'
                    input={{
                        type: "text",
                        placeholder: "BSc"
                    }}
                />
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Field of Study'
                    container='w-full mt-3'
                    input={{
                        type: "text",
                        placeholder: "Mechatronics Engineering"
                    }}
                />
            {/* </div> */}
            <div className='mt-3 flex space-x-3'>
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Start Year'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "2014"
                    }}
                />
                {current && <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='End Year'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "2019"
                    }}
                />}
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
            {/* <div className='flex justify-between items-center mt-6 text-xs text-coregray'>
                <p>Add More</p>
                <span className='bg-primarygray w-5 h-5 text-sm flex justify-center items-center rounded-full'>+</span>
            </div> */}
            {/* <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Course'
                    container='w-full mt-3'
                    input={{
                        type: "text",
                        placeholder: "Javascript Algorithm"
                    }}
                />
            <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Certification Link'
                    container='w-full mt-3'
                    input={{
                        type: "text",
                        placeholder: "http://javascript-algorithm"
                    }}
                /> */}
            <button
                className="bg-corered text-white hover:bg-black/5 text-sm font-opensans w-full py-3 mt-10"
                type="submit"
            >
                Next
            </button>
        </div>
    );
};

export default Education;