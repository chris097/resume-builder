import React, { useState } from 'react'
import Header from '../components/Header';
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import Input from '../components/input';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useFormik } from 'formik';
import { educationSchema } from '../validator';
import { createEducation } from '../service';
import toast from 'react-hot-toast';

type valueProps = {
    school_name: string
    school_location: string
    degree: string
    field: string
    start_date: string
    end_date: string
}

const Education = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const initialValues: valueProps = {
        school_name: "",
        school_location: "",
        degree: "",
        field: "",
        start_date: "",
        end_date: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema: educationSchema,
        onSubmit: values => {
            setLoading(true)
            return createEducation(values,
                (res: any) => {
                    if (res.status === 201) {
                        toast.success(res.message)
                        setLoading(false)
                    } else {
                        toast.error(res.message)
                        setLoading(false)
                    }
                }, (err: any) => {
                    toast.error(err.message);
                    setLoading(false)
                })
        }
    });

    return (
        <div>
            <div className='max-w-5xl mx-auto w-full my-8'>
                <button onClick={() => navigate(-1)} className='mb-6 text-basegray text-sm font-light flex space-x-1 cursor-pointer items-center'><MdOutlineKeyboardBackspace size="16px" /> <span>Back</span></button>
                <div className='max-w-4xl mx-auto'>
                    <div className='font-light text-blue-700'>Tell us about your education</div>
                    <div className='font-light text-basegray mb-8 my-3'>Include every school, even if you are still there or you didn't graduate</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex space-x-4'>
                            <div className='w-full'>
                            <Input
                                label='School Name'
                                input={{
                                    type: 'text',
                                    id: "school_name",
                                    placeholder: "Federal Polytechnic Nekede",
                                    ...formik.getFieldProps('school_name')
                                }}
                            />
                                {formik.touched.school_name && formik.errors.school_name ? (<span className='text-xs text-red-500'>{formik.errors.school_name}</span>) : null}
                            </div>
                            <div className='w-full'>
                            <Input
                                label='School Location'
                                input={{
                                    type: 'text',
                                    id: "school_location",
                                    placeholder: "Owerri, Imo State",
                                    ...formik.getFieldProps('school_location')
                                }}
                            />
                                {formik.touched.school_location && formik.errors.school_location ? (<span className='text-xs text-red-500'>{formik.errors.school_location}</span>) : null}
                                </div>
                        </div>
                        <div className='mt-3'>
                            <Input
                                label='Degree'
                                input={{
                                    type: 'text',
                                    id: "degree",
                                    placeholder: "B.tech in Computer science",
                                    ...formik.getFieldProps('degree')
                                }}
                            />
                            {formik.touched.degree && formik.errors.degree ? (<span className='text-xs text-red-500'>{formik.errors.degree}</span>) : null}
                        </div>
                        <div className='flex space-x-4 mt-3'>
                            <div className='w-full'>
                            <Input
                                label='Field of Study'
                                input={{
                                    type: 'text',
                                    id: 'field',
                                    placeholder: 'Computer science',
                                    ...formik.getFieldProps('field')
                                }}
                            />
                                {formik.touched.field && formik.errors.field ? (<span className='text-xs text-red-500'>{formik.errors.field}</span>) : null}
                            </div>
                            <div className='w-full'>
                            <Input
                                label='Graduation Start Date'
                                input={{
                                    type: 'date',
                                    id: "start_date",
                                    ...formik.getFieldProps('start_date')
                                }}
                            />
                                {formik.touched.start_date && formik.errors.start_date ? (<span className='text-xs text-red-500'>{formik.errors.start_date}</span>) : null}
                                </div>
                            <Input
                                label='Graduation End Date'
                                input={{
                                    type: 'date',
                                    id: 'end_start',
                                    ...formik.getFieldProps('end_date')
                                }}
                            />
                        </div>
                        <div className='mt-3 text-basegray space-x-2 flex items-center'>
                            <input type='checkbox' />
                            <span className='text-sm font-light'>I currently attend here</span>
                        </div>
                        <div className='flex justify-between mt-16 font-light'>
                            <button type='button' className='border w-32 h-10'>Back</button>
                            {/* <button className='bg-red-500 hover:bg-red-700 text-white w-32 h-10'>{`Save & Next`}</button> */}
                            <Button
                                bg='bg-red-500'
                                width='w-32'
                                height='h-14'
                                color='text-white'
                                type='submit'
                                name={loading ? "loading..." : "Save & Next"}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Education