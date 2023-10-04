import React, { useState } from 'react'
import Input from '../../input';
import { useFormik } from 'formik';
import { createUserExperience, updateUserExperience } from '../../../service';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

interface FormikProps {
    job_title: string
    company: string
    description: string
    start_date: string
    end_date: string
    start_month: string
    end_month: string
    start_year: string
    end_year: string
};

interface IProps {
    data: any
    months: {id:number, month: string}[]
    years: {id:number, year: string}[]
    isLoading: boolean
    setLoading: Function
    id: string
}

const ExperienceTwo = ({ data, months, years, isLoading, setLoading, id }: IProps) => {
    // const { data } = useQueryApi(CONSTANT_TEXT.GET_USER_EXPERIENCE, apiUrls.USER_EXPERIENCE_URL);

    const [current, setCurrentWork] = useState<boolean>(true);
    const queryClient = useQueryClient();
    // const [toggleExp, setToggleExp] = useState<boolean>(false);

    const startDate = data?.data[1]?.start_date;
    const endDate = data?.data[1]?.end_date;

    const initialValues: FormikProps = {
        job_title: data?.data[1]?.job_title || "",
        company: data?.data[1]?.company || "",
        description: data?.data[1]?.description || "",
        start_date: startDate || "",
        end_date: endDate || "",
        start_month: "",
        end_month: "",
        start_year: data?.data[1]?.start_year || "",
        end_year: data?.data[1]?.end_year || ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            setLoading(true);
            const payload = {
                job_title: values.job_title,
                company: values.company,
                description: values.description,
                country: values.company,
                start_date: `${values.start_month} ${values.start_year}`,
                end_date: `${values.end_month} ${values.end_year}`
            }
            if (data?.data?.length === 1) {
                const responses = await createUserExperience(payload);
                if (responses) {
                    queryClient.invalidateQueries({
                        queryKey: ["experience"],
                        exact: true
                    })
                    queryClient.invalidateQueries({
                        queryKey: ["all"],
                        exact: true
                    })
                    setLoading(false);
                    toast.success(responses.message);
                } else {
                    toast.error(responses.message);
                    setLoading(false);
                }
            } else {
                const responses = await updateUserExperience(payload, id);
                if (responses.status === 201) {
                    queryClient.invalidateQueries({
                        queryKey: ["experience"],
                        exact: true
                    })
                    setLoading(false);
                    toast.success(responses.message)
                } else {
                    toast.error(responses.message);
                    setLoading(false);
                }
            }
        }
    });

    return (
        <div>
            <p className='text-sm font-light mt-3'>#2</p>
            <form onSubmit={formik.handleSubmit}>
                <div className='mt-4'>
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
                            placeholder: "Yep, Nigeria",
                            ...formik.getFieldProps('company')
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
                            placeholder: "Frontend Developer",
                            ...formik.getFieldProps('job_title')
                        }}
                    />
                </div>
                <div className='mt-3 flex gap-3'>
                    <div className='w-full'>
                        <label className='text-coregray text-xs font-normal'>Start Month</label>
                        <div className='w-full h-[42px] flex items-center bg-white border border-[#E4E7EB] px-2 focus:outline-none bg-transparent text-basegray text-sm mt-1'>
                            <select onChange={formik.handleChange} name='start_month' className='w-full appearance-none text-xs h-full outline-none'>
                                <option>Select</option>
                                {months.map((month: any) => <option defaultValue="January" key={month.id}>{month.month}</option>)}
                            </select>
                            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5893 12.2559C10.2638 12.5813 9.73617 12.5813 9.41075 12.2559L5.24408 8.08922C4.91864 7.76378 4.91864 7.23614 5.24408 6.9107C5.56952 6.58527 6.09715 6.58527 6.42259 6.9107L10 10.4881L13.5774 6.9107C13.9028 6.58527 14.4305 6.58527 14.7559 6.9107C15.0813 7.23614 15.0813 7.76378 14.7559 8.08922L10.5893 12.2559Z" fill="#666666" fillOpacity="0.5" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className='text-coregray text-xs font-normal'>Start Year</label>
                        <div className='w-full h-[42px] flex items-center bg-white border border-[#E4E7EB] px-2 focus:outline-none bg-transparent text-basegray text-sm mt-1'>
                            <select onChange={formik.handleChange} name='start_year' className='w-full appearance-none text-xs h-full outline-none'>
                                <option>Select</option>
                                {years.map((year: any) => <option defaultValue="2023" key={year.id}>{year.year}</option>)}
                            </select>
                            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5893 12.2559C10.2638 12.5813 9.73617 12.5813 9.41075 12.2559L5.24408 8.08922C4.91864 7.76378 4.91864 7.23614 5.24408 6.9107C5.56952 6.58527 6.09715 6.58527 6.42259 6.9107L10 10.4881L13.5774 6.9107C13.9028 6.58527 14.4305 6.58527 14.7559 6.9107C15.0813 7.23614 15.0813 7.76378 14.7559 8.08922L10.5893 12.2559Z" fill="#666666" fillOpacity="0.5" />
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>
                {current && <div className='mt-3 flex gap-3'>
                    <div className='w-full'>
                        <label className='text-coregray text-xs font-normal'>End Month</label>
                        <div className='w-full h-[42px] flex items-center bg-white border border-[#E4E7EB] px-2 focus:outline-none bg-transparent text-basegray text-sm mt-1'>
                            <select onChange={formik.handleChange} name='end_month' className='w-full appearance-none text-xs h-full outline-none'>
                                <option>Select</option>
                                {months.map((month: any) => <option defaultValue="January" key={month.id}>{month.month}</option>)}
                            </select>
                            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5893 12.2559C10.2638 12.5813 9.73617 12.5813 9.41075 12.2559L5.24408 8.08922C4.91864 7.76378 4.91864 7.23614 5.24408 6.9107C5.56952 6.58527 6.09715 6.58527 6.42259 6.9107L10 10.4881L13.5774 6.9107C13.9028 6.58527 14.4305 6.58527 14.7559 6.9107C15.0813 7.23614 15.0813 7.76378 14.7559 8.08922L10.5893 12.2559Z" fill="#666666" fillOpacity="0.5" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className='text-coregray text-xs font-normal'>End Year</label>
                        <div className='w-full h-[42px] flex items-center bg-white border border-[#E4E7EB] px-2 focus:outline-none bg-transparent text-basegray text-sm mt-1'>
                            <select onChange={formik.handleChange} name='end_year' className='w-full appearance-none text-xs h-full outline-none'>
                                <option>Select</option>
                                {years.map((year: any) => <option defaultValue="2023" key={year.id}>{year.year}</option>)}
                            </select>
                            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5893 12.2559C10.2638 12.5813 9.73617 12.5813 9.41075 12.2559L5.24408 8.08922C4.91864 7.76378 4.91864 7.23614 5.24408 6.9107C5.56952 6.58527 6.09715 6.58527 6.42259 6.9107L10 10.4881L13.5774 6.9107C13.9028 6.58527 14.4305 6.58527 14.7559 6.9107C15.0813 7.23614 15.0813 7.76378 14.7559 8.08922L10.5893 12.2559Z" fill="#666666" fillOpacity="0.5" />
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>}
                <div className='mt-3 w-full'>
                    <label className="text-xs text-coregray">Description</label>
                    <textarea
                        onChange={formik.handleChange}
                        name='description'
                        value={formik.values.description}
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
                    className="bg-corered text-white hover:bg-black/5 text-[13px] font-opensans w-full py-2 mt-5"
                    type="submit">{isLoading ? "Loading" : (data?.data?.length === 0 || data?.data?.length === 1 ? "Submit" : "Update")}</button>
            </form>
        </div>
    );
};

export default ExperienceTwo;