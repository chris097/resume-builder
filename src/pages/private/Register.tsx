import HomeButton from '../../components/Button';
import Input from '../../components/input';
import Logo from '../../public/svgs/Logo';
import { BsFacebook } from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_URL } from '../../routes/url';
import { useFormik } from 'formik';
import { registerSchema } from '../../validator';
import { useAuth } from '../../context/authContext';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Register = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const { register } = useAuth();

    const navigate = useNavigate();

    type formikProps = {
        fullName: string
        email: string
        password: string
    };

    const initialValues: formikProps = {
        fullName: '',
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues,
        validationSchema: registerSchema,
        onSubmit: values => {
            setLoading(true)
            return register(values, (responses: any) => { 
                if (responses.status === 201) {
                    toast.success(responses.message)
                    navigate(ROUTE_URL.RESUME_URL);
                    setLoading(false)
                } else {
                    toast.error("Invaid credentials");
                    setLoading(false)
                }
            }, (err: any) => {
                toast.error(err.message)
                setLoading(false)
            })
        }
    });

    return (
        <div className='flex justify-center flex-col items-center mx-auto mt-8 font-opensans'>
            <Logo
                width='162'
                height='52'
            />
            <h1 className='mt-3'>Add some text here</h1>
            <form onSubmit={formik.handleSubmit} className='w-1/3 border h-auto py-6 bg-white rounded mt-6 px-6'>
                <p className='text-secondarygray'>Please fill details:</p>
                <div className='mt-6'>
                    <Input
                        label='Full Name'
                        input={{
                            type: 'text',
                            placeholder: "Christian Chiemela",
                            ...formik.getFieldProps("fullName")
                        }}
                    />
                </div>
                <div className='mt-3'>
                    <Input
                        label='Email'
                        input={{
                            type: 'email',
                            placeholder: "christian@gmail.com",
                            ...formik.getFieldProps("email")
                        }}
                    />
                </div>
                <div className='mt-3'>
                    <Input
                        label='Password'
                        input={{
                            type: 'password',
                            placeholder: "******",
                            ...formik.getFieldProps('password')
                        }}
                    />
                </div>
                <div className='text-red-400 text-sm flex justify-end mt-2 cursor-pointer'>Forgotten password?</div>
                <div className='mt-5'>
                    <HomeButton
                        height='h-12'
                        width='w-full'
                        bg='bg-corered'
                        name={loading ? "loading..." : 'Sign Up'}
                        color='text-white'
                        type='submit'
                    />
                </div>
                <div className='text-center text-xl my-3'>OR</div>
                <div className='space-y-3'>
                    <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                        <BsFacebook color='blue' size={24} />
                        <p>Sign Up with Facebook</p>
                    </div>
                    <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                        <FcGoogle size={24} />
                        <p>Sign Up with Google</p>
                    </div>
                </div>
            </form>
            <p className='mt-3 text-sm text-secondarygray'>Already have an account Login <Link to={ROUTE_URL.LOGIN_URL} className='text-red-400 cursor-pointer'>here</Link></p>
        </div>
    )
};

export default Register