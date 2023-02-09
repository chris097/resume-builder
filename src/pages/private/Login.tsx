import React, { useState } from 'react'
import Button from '../../components/Button';
import Input from '../../components/input';
import Logo from '../../public/svgs/Logo';
import { BsFacebook } from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_URL } from '../../routes/url';
import { useFormik } from 'formik';
import { loginSchema } from '../../validator';
import { useAuth } from '../../context/authContext';
import toast from 'react-hot-toast';
import { setAuthUser } from '../../helpers/api';

const Login = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const { login, setUserName } = useAuth();

    const navigate = useNavigate();

    type formikProps = {
        email: string
        password: string
    };

    const initialValues:formikProps = {
        email: '',
        password: ''
    }
    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: values => {
            setLoading(true)
            return login(values, (responses:any) => {
                if (responses.status === 201) {
                    toast.success(responses.message);
                    navigate(ROUTE_URL.RESUME_URL);
                    setAuthUser(responses.data.token)
                    console.log(responses)
                    setUserName(responses.data.fullName)
                    setLoading(false);
                } else {
                    toast.error("Invalid credentials")
                    setLoading(false)
                }
            }, (err: any) => {
                toast.error(err.message)
                setLoading(false)
            })
        }
    });

  return (
      <div className='flex justify-center flex-col items-center mx-auto mt-14 font-opensans'>
          <Logo
              width='162'
              height='52'
          />
          <h1 className='mt-3'>Add some text here</h1>
          <form onSubmit={formik.handleSubmit} className='md:w-1/3 w-[90%] border h-auto py-6 bg-white rounded mt-6 px-6'>
              <p className='text-secondarygray'>Please fill details:</p>
              <div className='mt-6'>
                  <Input
                  label='Email'
                      input={{
                        type: 'email',
                        placeholder: "Christian@gmail.com",
                        ...formik.getFieldProps('email')
                  }}
                  />
                  {formik.touched.email && formik.errors.email ? (<span className='text-xs text-red-500'>{formik.errors.email}</span>) : null}
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
                  {formik.touched.password && formik.errors.password ? (<span className='text-xs text-red-500'>{formik.errors.password}</span>) : null}
              </div>
              <div className='text-red-400 text-sm flex justify-end mt-2 cursor-pointer'>Forgotten password?</div>
              <div className='mt-5'>
                  <Button
                  height='h-12'
                  width='w-full'
                  bg='bg-corered'
                  name={loading ? "loading..." : 'Sign In'}
                    color='text-white'
                    type='submit'
              />
              </div>
              <div className='text-center text-xl my-3'>OR</div>
              <div className='space-y-3'>
                  <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                      <BsFacebook color='blue' size={24} />
                      <p>Sign In with Facebook</p>
                  </div>
                  <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                      <FcGoogle size={24} />
                      <p>Sign In with Google</p>
                  </div>
              </div>
          </form>
          <p className='mt-3 text-sm text-secondarygray'>I don't have an account Sign Up <Link to={ROUTE_URL.REGISTER_URL} className='text-red-400 cursor-pointer'>here</Link></p>
    </div>
  )
}

export default Login;