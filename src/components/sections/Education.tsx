import React, { useState } from 'react'
import Input from '../input';
import { useFormik } from 'formik';

const Education = () => {

    const [current, setCurrentWork] = useState<boolean>(true);

    const initialValues = {
        school_name: "",
        degree: "",
        start_date: "",
        end_date: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            console.log(values)
        }
    })


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
                        placeholder: "University of Lagos",
                        ...formik.getFieldProps("school_name")
                    }}
                />
                {/* <Input
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
                /> */}
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
                        placeholder: "BSc",
                        ...formik.getFieldProps("degree")
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
                        placeholder: "Mechatronics Engineering",
                        ...formik.getFieldProps("degree")
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
                        placeholder: "2014",
                        ...formik.getFieldProps("start_date")
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
                        placeholder: "2019",
                        ...formik.getFieldProps("end_date")
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