import Button from '../Button';
import { ROUTE_URL } from '../../routes/url';
import Input from '../input';
import { useFormik } from 'formik';
import { registerSchema } from '../../validator';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { setAuthUser } from '../../helpers/api';
import toast from 'react-hot-toast';
import { useState } from 'react';
import HidePassword from '../../public/svgs/HidePassword';
import ShowPassword from '../../public/svgs/ShowPassword';


interface FormikProps {
    email: string
    password: string
//    passwordConfirmation: string
};

const RegisterUser = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const { register } = useAuth();

    const initialValues: FormikProps = {
        email: "",
        password: "",
        // passwordConfirmation: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema: registerSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            const payload: object = { email: values.email, password: values.password };
            const responses = await register(payload);
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
                {/* <div className=" mt-5">
                    <Input
                        handleClick={() => setConfirmPassword(!confirmPassword)}
                        icon={confirmPassword ? <HidePassword /> : <ShowPassword />}
                        label="Comfirm Password"
                        input={{
                            type: confirmPassword ? "text" : "password",
                            placeholder: "******",
                        }}
                    />
                    <p className="text-xs text-corered mt-1 font-opensans">{formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? formik.errors.passwordConfirmation : null}</p>
                </div> */}
                <div className="mt-14">
                    <Button
                        height="h-12"
                        width="w-[81%]"
                        bg="bg-corered"
                        name={isLoading ? "Loading..." : "Register"}
                        color="text-white" type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default RegisterUser;