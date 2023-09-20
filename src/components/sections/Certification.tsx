import React, { useState } from 'react';
import Input from '../input';
import { useFormik } from 'formik';
import { boolean } from 'yup';
import { createUserCertificate } from '../../service';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { apiUrls } from '../../helpers/api/url';
import { CONSTANT_TEXT } from '../../constant';
import useQueryApi from '../../helpers/useQuery';
import NextButton from '../Button/NextButton';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../routes/publicRoutes';
import { ROUTE_URL } from '../../routes/url';

interface FormikProps {
    title: string
    title_url: string
}

const Certification = ({
    setCurrentIndex,
    setCurrentTab,
    currentIndex,
    currentTab
}:{setCurrentIndex: Function, setCurrentTab: Function, currentIndex: number, currentTab: number}) => {

    const [loading, setLoading] = useState<boolean>(false);
    const queryClient = useQueryClient();
    
    const { data } = useQueryApi(CONSTANT_TEXT.GET_USER_CERTIFICATE, apiUrls.USER_CERTIFICATE_URL);

    const initialValues: FormikProps = {
        title: data?.certificate[0]?.title || "",
        title_url: data?.certificate[0]?.title_url || ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            setLoading(true);
            const response = await createUserCertificate(values);
            if (response.status === 201) {
                queryClient.invalidateQueries({
                    queryKey: ["certificate"],
                    exact: true
                })
                setLoading(false);
                toast.success(response.message);
            } else {
                setLoading(false);
                toast.error(response.message)
            }
        }
    })

    return (
        <>
        <form onSubmit={formik.handleSubmit} className='mt-7'>
            <Input
                handleClick=""
                icon=""
                inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                labelStyle='text-coregray text-xs font-normal'
                label='Cerfication name'
                container='w-full mt-3'
                input={{
                    type: "text",
                    placeholder: "Javascript & Algorithm",
                    ...formik.getFieldProps("title")
                }}
            />
            <Input
                handleClick=""
                icon=""
                inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                labelStyle='text-coregray text-xs font-normal'
                label='Cerfication link'
                container='w-full mt-3'
                input={{
                    type: "text",
                    placeholder: "https://certificate.com",
                    ...formik.getFieldProps("title_url")
                }}
            />
            <button
                    className="bg-corered hover:bg-black/5 text-sm text-white font-opensans mx-auto py-3 w-full mt-10"
                    type="submit"
                >
                     {loading ? "Loading..." : "Next"}
                </button>
        </form>
            <div className='text-corered text-sm font-poppins mt-7 flex justify-end cursor-pointer'>
                <Link to={ROUTE_URL.COMPLETE_RESUME_URL}>Finish</Link>
        </div>
        </>
    );
};

export default Certification