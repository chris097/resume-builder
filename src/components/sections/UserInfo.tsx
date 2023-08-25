import React, { useEffect, useState } from 'react'
import Input from '../input';
import { useFormik } from 'formik';
import { userInfoSchema } from '../../validator';
import { createUserInfo, updateUserInfo } from '../../service';
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
    const queryClient = useQueryClient();

    const { data } = useQueryApi([CONSTANT_TEXT.GET_USER_INFO], apiUrls.USER_INFO);

    const id = data?.data[0]?._id;
    const isData = data?.data?.length;


    const initialValues: FormikProps = {
        fullname: data?.data[0]?.fullname || "",
        email: data?.data[0]?.email || "",
        phone: data?.data[0]?.phone || "",
        portfolio: data?.data[0]?.portfolio || "",
        address: data?.data[0]?.address || "",
        bio: data?.data[0]?.bio|| ""
    };

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: userInfoSchema,
        onSubmit: async (values) => {
            setLoading(true);
            if (isData === 0) {
                const responses = await createUserInfo(values);
                if (responses.status === 201) {
                    queryClient.invalidateQueries({
                        queryKey: ["info"],
                        exact: true
                    })
                    setLoading(false);
                    toast.success(responses.message);
                } else {
                    toast.error(responses.message);
                    setLoading(false);
                }
            }
            else {
                const responses = await updateUserInfo(values, id);
                if (responses.status === 201) {
                    queryClient.invalidateQueries({
                        queryKey: ["info"],
                        exact: true
                    })
                    setLoading(false);
                    toast.success(responses.message);
                } else {
                    toast.error(responses.message);
                    setLoading(false);
                }
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
                            placeholder: "Christian Chiemela",
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
                            placeholder: "chrisfidel@gmail.com",
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
                             placeholder: "+2347015362583",
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
                            placeholder: "https://my-portfolio.com",
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
                            placeholder: "10 My Address, Lagos State, Nigeria",
                            ...formik.getFieldProps("address")
                        }}
                    />
                </div>
                <div className='mt-3 w-full'>
                    <label className="text-xs">Bio</label>
                    <textarea
                        onChange={formik.handleChange}
                        name='bio'
                        placeholder='- About yourself'
                        value={formik.values.bio}
                        className="w-full h-32 flex items-center px-3 py-2 outline-none text-basegray text-xs bg-primarygray rounded mt-1"
                    />
                </div>
                <button
                    className="bg-primarygray hover:bg-black/5 text-xs font-opensans w-full py-3 mt-10"
                    type="submit"
                >
                    {loading ? "Loading..." : isData === 0 ? "Submit" : "Update"}
                </button>
            </form>
        </>
    );
};

export default UserInfo