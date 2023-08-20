import React, { useState } from 'react'
import { useFormik } from 'formik';
import { loginSchema } from '../../validator';
import { useAuth } from "../../context/authContext";
import toast from 'react-hot-toast';
import { ROUTE_URL } from '../../routes/url';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../input';
import Button from '../Button';
import HidePassword from '../../public/svgs/HidePassword';
import ShowPassword from '../../public/svgs/ShowPassword';
import { setAuthUser } from '../../helpers/api';

interface FormikProps {
    email: string
    password: string
};

const LoginUser = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const initialValues: FormikProps = {
        email: "",
        password: "",
    };

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            const responses = await login(values);
            if (responses.status === 201) {
                setAuthUser(responses.data.token);
                toast.success(responses.message);
                navigate(ROUTE_URL.RESUME_URL);
                setIsLoading(false);
            } else {
                toast.error(responses.message);
                setIsLoading(false);
            }
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="w-[100%] mt-[55px]">
                <div>        
                    <Input
                        label='Email address'
                        handleClick=""
                        icon=""
                        input={{
                            type: "email",
                            placeholder:"Johndoe@gmail.com",
                            ...formik.getFieldProps('email')
                        }}
                    />
                    <p className="text-xs text-corered mt-1 font-opensans">{formik.errors.email && formik.touched.email ? formik.errors.email : null}</p>
                </div>
                <div className="mt-5">
                    <Input
                        label="Password"
                        handleClick={() => setShowPassword(!showPassword)}
                        icon={showPassword ? <HidePassword /> : <ShowPassword />}
                        input={{
                            type: showPassword ? "text" : "password",
                            placeholder: "******",
                            ...formik.getFieldProps('password')
                        }}
                    />
                    <p className="text-xs text-corered mt-1 font-opensans">{formik.errors.password && formik.touched.password ? formik.errors.password : null}</p>
                </div>
                <div className="text-[#0073E6] mt-4 text-[16px] w-[81%] font-opensans font-normal flex justify-end ">Forgot password?</div>
                <div className="mt-10">
                    <Button
                        height="h-12"
                        width="w-[81%]"
                        bg="bg-corered"
                        name={isLoading ? "Loading..." : "Login"}
                        color="text-white" type="submit"
                    />
                </div>
            </form>
        </div>
    );
}

export default LoginUser;