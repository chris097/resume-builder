import React, { useState } from 'react'
import Input from '../input';
import { useFormik } from 'formik';
import { createUserEducation } from '../../service';
import toast from 'react-hot-toast';
import { apiUrls } from '../../helpers/api/url';
import { CONSTANT_TEXT } from '../../constant';
import useQueryApi from '../../helpers/useQuery';
import { useQueryClient } from '@tanstack/react-query';

interface IProps {
    school_name: string
    degree: string
    program: string
    start_date: string
    end_date: string
}

const Education = () => {

    const [current, setCurrentWork] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const queryClient = useQueryClient();

    const { data } = useQueryApi(CONSTANT_TEXT.GET_USER_EDUCATION, apiUrls.EDUCATION_URL);
    

    const initialValues: IProps = {
        school_name: data?.data[0]?.school_name || "",
        degree: data?.data[0]?.degree || "",
        program: data?.data[0]?.program || "",
        start_date: data?.data[0]?.start_date || "",
        end_date: data?.data[0]?.end_date || ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            setLoading(true);
            const responses = await createUserEducation(values);
            if (data?.data?.length === 0) {
                if (responses.status === 201) {
                    queryClient.invalidateQueries({
                        queryKey: ["education"],
                        exact: true
                    })
                    setLoading(false);
                    toast.success(responses.message);
                } else {
                    setLoading(false);
                    toast.error(responses.message);
                }
            } else {
                console.log("new feature...")
            }
        }
    });


    return (
        <form onSubmit={formik.handleSubmit} className='mt-10'>
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
                    placeholder: "Computer Science",
                    ...formik.getFieldProps("program")
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
                {loading ? "Loading..." : "Next"}
            </button>
        </form>
    );
};

export default Education;