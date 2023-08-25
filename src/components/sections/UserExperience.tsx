import React, { useState } from 'react';
import Input from '../input';

const UserExperience = () => {

    const [current, setCurrentWork] = useState<boolean>(true);

console.log(current)
    return (
        <div>
            <div className='mt-3 flex space-x-3'>
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent text-basegray text-xs'
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
                    inputContainer='w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Role'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "Frontend Developer"
                    }}
                />
            </div>
            <div className='mt-3 flex space-x-3'>
                <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='Start Date'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "April 2022"
                    }}
                />
                {current && <Input
                    handleClick=""
                    icon=""
                    inputContainer='w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1'
                    inputStyle='w-full h-full focus:outline-none bg-transparent text-basegray text-xs'
                    labelStyle='text-coregray text-xs font-normal'
                    label='End Date'
                    container='w-full'
                    input={{
                        type: "text",
                        placeholder: "April 2023"
                    }}
                />}
            </div>
            <div className='mt-3 w-full'>
                <label className="text-xs">Description</label>
                <textarea
                    // onChange={formik.handleChange}
                    name='description'
                    // value={formik.values.bio}
                    className="w-full h-28 flex items-center px-3 py-2 outline-none text-basegray text-xs bg-primarygray rounded mt-1"
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
                className="bg-primarygray hover:bg-black/5 text-xs font-opensans w-full py-3 mt-10"
                type="submit"
            >
                Submit
            </button>
        </div>
    );
};

export default UserExperience;