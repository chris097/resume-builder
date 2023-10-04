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
import NextButton from '../Button/NextButton';

interface FormikProps {
    fullname: string
    email: string
    phone: string
    portfolio: string
    address: string
    bio: string
};

const UserInfo = ({
    setCurrentIndex,
    setCurrentTab,
    currentIndex,
    currentTab
}:{setCurrentIndex: Function, setCurrentTab: Function, currentIndex: number, currentTab: number}) => {

    const [loading, setLoading] = useState<boolean>(false);
    const queryClient = useQueryClient();

    const { data } = useQueryApi(CONSTANT_TEXT.GET_USER_INFO, apiUrls.USER_INFO);

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
            <form onSubmit={formik.handleSubmit} className='mt-4'>
                <div className='mt-3 w-full space-y-3'>
                    <Input
                        container="w-full"
                        label="Full Name"
                        labelStyle="text-coregray text-xs font-normal"
                        handleClick=""
                        icon=""
                        inputContainer="w-full h-[42px] flex items-center bg-primarygray rounded mt-1"
                        inputStyle="w-full h-full border border-[#E4E7EB] px-2 focus:outline-none bg-white text-basegray text-xs"
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
                        inputContainer="w-full h-[42px] flex items-center bg-primarygray rounded mt-1"
                        inputStyle="w-full h-full px-2 focus:outline-none border border-[#E4E7EB] bg-white text-basegray text-xs"
                        input={{
                            type: "text",
                            placeholder: "chrisfidel@gmail.com",
                            ...formik.getFieldProps("email")
                        }}
                    />
                </div>
                <div className='mt-3 w-full space-y-3'>
                    <Input
                        container="w-full"
                        label="Phone No."
                        labelStyle="text-coregray text-xs font-normal"
                        handleClick=""
                        icon=""
                        inputContainer="w-full h-[42px] flex items-center bg-primarygray rounded mt-1"
                        inputStyle="w-full h-full px-2 focus:outline-none border border-[#E4E7EB] bg-white text-basegray text-xs"
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
                        inputContainer="w-full h-[42px] flex items-center bg-primarygray rounded mt-1"
                        inputStyle="w-full h-full px-2 focus:outline-none border border-[#E4E7EB] bg-white text-basegray text-xs"
                        input={{
                            type: "text",
                            placeholder: "https://my-portfolio.com",
                            ...formik.getFieldProps("portfolio")
                        }}
                    />
                </div>
                <div className='mt-3 w-full space-y-3'>
                    <Input
                        container="w-full"
                        label="Address"
                        labelStyle="text-coregray text-xs font-normal"
                        handleClick=""
                        icon=""
                        inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded mt-1"
                        inputStyle="w-full h-full px-2 focus:outline-none border border-[#E4E7EB] bg-white text-basegray text-xs"
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
                        className="w-full h-32 flex items-center px-3 py-2 outline-none border border-[#E4E7EB] text-basegray text-xs bg-white rounded mt-1"
                    />
                </div>
                <button
                    className="bg-corered text-xs text-white font-opensans mx-auto py-3 w-full mt-10"
                    type="submit"
                >
                    {loading ? "Loading..." : isData === 0 ? "Next" : "Update"}
                </button>
            </form>
            <NextButton
                setCurrentIndex={setCurrentIndex}
                setCurrentTab={setCurrentTab}
                currentIndex={currentIndex}
                currentTab={currentTab}
                name='Next'
            />
        </>
    );
};

export default UserInfo