import React, { useState } from 'react'
import Input from '../input';
import { useFormik } from 'formik';
import { userInfoSchema } from '../../validator';
import { createUserInfo } from '../../service';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery';
import { CONSTANT_TEXT } from '../../constant';

interface FormikProps {
    fullname: string
    email: string
    phone: string
    portfolio: string
    address: string
    bio: string
};

const UserInfo = () => {

    const [loading, setLoading] = useState<boolean>(false);

    // const { data, isLoading } = useQueryApi([CONSTANT_TEXT.GET_USER_INFO], apiUrls.USER_INFO);

    const queryClient = useQueryClient();

    const initialValues: FormikProps = {
        fullname: "",
        email: "",
        phone: "",
        portfolio: "",
        address: "",
        bio: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema: userInfoSchema,
        onSubmit: async (values) => {
            const responses = await createUserInfo(values);
            setLoading(true);
            if (responses.status === 201) {
                setLoading(false);
                toast.success(responses.message);
                queryClient.invalidateQueries({queryKey: [CONSTANT_TEXT.GET_USER_INFO]})
            } else {
                toast.error(responses.message);
                setLoading(false);
            }
        }
    });


    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            <div className='mt-3 flex w-full space-x-3'>
                <Input
                    container="w-full"
                    label="Full Name"
                    labelStyle="text-coregray text-xs font-normal"
                    handleClick=""
                    icon=""
                    inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                    inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                    input={{
                        type: "text",
                        ...formik.getFieldProps("fullname")
                    }}
                />
                <Input
                    container="w-full"
                    label="Email"
                    labelStyle="text-coregray text-xs font-normal"
                    handleClick=""
                    icon=""
                    inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                    inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                    input={{
                        type: "text",
                        ...formik.getFieldProps("email")
                    }}
                />
            </div>
            <div className='mt-3 flex w-full space-x-3'>
                <Input
                    container="w-full"
                    label="Phone No."
                    labelStyle="text-coregray text-xs font-normal"
                    handleClick=""
                    icon=""
                    inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                    inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                    input={{
                        type: "text",
                        ...formik.getFieldProps("phone")
                    }}
                />
                <Input
                    container="w-full"
                    label="Portfolio"
                    labelStyle="text-coregray text-xs font-normal"
                    handleClick=""
                    icon=""
                    inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                    inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                    input={{
                        type: "text",
                        ...formik.getFieldProps("portfolio")
                    }}
                />
            </div>
            <div className='mt-3 flex w-full space-x-3'>
                <Input
                    container="w-full"
                    label="Address"
                    labelStyle="text-coregray text-xs font-normal"
                    handleClick=""
                    icon=""
                    inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                    inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                    input={{
                        type: "text",
                        ...formik.getFieldProps("address")
                    }}
                />
            </div>
            <div className='mt-3 w-full'>
                <label className="text-xs">Bio</label>
                <textarea
                    onChange={formik.handleChange}
                    name='bio'
                    className="w-full h-32 flex items-center px-3 py-2 outline-none text-basegray text-xs bg-primarygray rounded mt-1" />
            </div>
            <button
                className="bg-primarygray hover:bg-black/5 text-xs font-opensans w-full py-3 mt-10"
                type="submit"
            >
                {loading ? <span className='animate-pulse text-lg'>...</span> : "Submit"}
            </button>
            </form> 
            </>
    );
};

export default UserInfo