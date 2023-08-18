import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/input";
// import Logo from "../../public/svgs/Logo";
import sideImg from "../../public/svgs/images/LoginPix.png";
// import { BsFacebook } from 'react-icons/bs';
// import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_URL } from "../../routes/url";
import { useFormik } from "formik";
import { loginSchema } from "../../validator";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import { setAuthUser } from "../../helpers/api";

const Login = ({ handleLogin }: any) => {
  //   const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { login, setUserName } = useAuth();

  const navigate = useNavigate();

  type formikProps = {
    email: string;
    password: string;
  };

  const initialValues: formikProps = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setLoading(true);
      return login(
        values,
        (responses: any) => {
          if (responses.status === 201) {
            toast.success(responses.message);
            navigate(ROUTE_URL.RESUME_URL);
            setAuthUser(responses.data.token);
            console.log(responses);
            setUserName(responses.data.fullName);
            setLoading(false);
          } else {
            toast.error("Invalid credentials");
            setLoading(false);
          }
        },
        (err: any) => {
          toast.error(err.message);
          setLoading(false);
        }
      );
    },
  });

  return (
    <div className=" flex w-[100%] justify-between">
      <div className=" fixed w-[50%] ">
        <img className=" h-screen object-cover w-full" src={sideImg} alt="Logo" />
      </div>
      <div className=" w-[50%] mt-[15px] ml-[50%]">
        <div className="">
          <Link to={ROUTE_URL.HOME_URL}>
            <div className="ml-[24px]">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5625 14.0625H25.3125C25.5611 14.0625 25.7996 14.1613 25.9754 14.3371C26.1512 14.5129 26.25 14.7514 26.25 15C26.25 15.2486 26.1512 15.4871 25.9754 15.6629C25.7996 15.8387 25.5611 15.9375 25.3125 15.9375H6.5625C6.31386 15.9375 6.0754 15.8387 5.89959 15.6629C5.72377 15.4871 5.625 15.2486 5.625 15C5.625 14.7514 5.72377 14.5129 5.89959 14.3371C6.0754 14.1613 6.31386 14.0625 6.5625 14.0625Z"
                  fill="black"
                />
                <path
                  d="M6.95062 15L14.7262 22.7737C14.9023 22.9498 15.0012 23.1885 15.0012 23.4375C15.0012 23.6864 14.9023 23.9252 14.7262 24.1012C14.5502 24.2773 14.3115 24.3761 14.0625 24.3761C13.8135 24.3761 13.5748 24.2773 13.3987 24.1012L4.96125 15.6637C4.87394 15.5766 4.80468 15.4732 4.75741 15.3593C4.71015 15.2454 4.68582 15.1233 4.68582 15C4.68582 14.8766 4.71015 14.7545 4.75741 14.6407C4.80468 14.5268 4.87394 14.4233 4.96125 14.3362L13.3987 5.89871C13.5748 5.72268 13.8135 5.62378 14.0625 5.62378C14.3115 5.62378 14.5502 5.72268 14.7262 5.89871C14.9023 6.07475 15.0012 6.31351 15.0012 6.56246C15.0012 6.81142 14.9023 7.05018 14.7262 7.22621L6.95062 15Z"
                  fill="black"
                />
              </svg>
            </div>
          </Link>
          <div className="flex justify-between mt-[80px] text-[16px] text-[#000112] font-[500] font-opensans ml-[94px] w-[70%]">
            <div className="  ">
              <h1>LOG IN</h1>
            </div>
            <Link to="">
              <h1 className=" ">REGISTER</h1>
            </Link>
          </div>
        </div>
        <div className="mt-[12px] ml-[94px]">
          <div className="border-b-[6px]    w-[82%]  border-b-[#D9D9D9]">{/* hi */}</div>
          <div className=" w-[40%] mt-[-5px] border-[2.5px]    border-[#EB5757]  ">{/* hi */}</div>
          <form onSubmit={formik.handleSubmit} className="w-[100%] mt-[55px]">
            <label className="text-[16px] font-normal  text-[#3B3B3B]" htmlFor="email">
              Email address
            </label>
            <br />
            <input
              className="w-[81%] text-[#3B3B3B] mb-[16px] placeholder:text-[#666666] placeholder:opacity-50  h-[56px] mt-[12px] rounded-[8px] outline-[#3B3B3B]  pl-[16px] border-[1px] border-[#CED4DA] "
              type="email"
              placeholder="Johndoe@gmail.com"
            />
            <br />
            {/* <label className="text-[16px] font-normal text-[#3B3B3B]" htmlFor="password">
              Password
            </label>
            <br />{" "} */}
            <div className=" mt-3">
              <Input
                label="Password"
                input={{
                  type: "password",
                  placeholder: "******",
                  //   ...formik.getFieldProps("password"),
                }}
              />
              {/* {formik.touched.password && formik.errors.password ? <span className="text-xs text-red-500">{formik.errors.password}</span> : null} */}
            </div>
            {/* <div className="w-[81%] mb-[16px] flex mt-[12px] justify-between items-center  pr-[15px] rounded-[8px] h-[56px] border-[1px] outline-[#3B3B3B] border-[#CED4DA]">
              <input
                className=" pl-[16px]    outline-none border-none w-[95%] h-[54px] rounded-tl-[8px] rounded-bl-[8px]  text-[16px] placeholder:text-[#666666] placeholder:opacity-50 text-[#3B3B3B] "
                type={showPassword === true ? "text" : "password"}
                placeholder="********"
              />
              <button className="pl-[7px]" onClick={() => setShowPassword((open) => !open)} type="button">
                {showPassword === true ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="2" stroke="#666666" stroke-opacity="0.5" stroke-width="1.5" />
                    <path d="M21 12C21 12 16.9706 17 12 17C7.02944 17 3 12 3 12C3 12 7.02944 7 12 7C16.9706 7 21 12 21 12Z" stroke="#666666" stroke-opacity="0.5" stroke-width="1.5" />
                  </svg>
                ) : (
                  <svg width="24" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.375 8.40625C19.2893 8.4551 19.1948 8.48658 19.097 8.49888C18.9991 8.51118 18.8998 8.50406 18.8047 8.47794C18.7097 8.45182 18.6207 8.4072 18.5428 8.34664C18.465 8.28608 18.3999 8.21076 18.3512 8.125L16.57 5.0125C15.5344 5.7127 14.392 6.24018 13.1875 6.57438L13.7378 9.87625C13.754 9.97346 13.7509 10.0729 13.7287 10.1689C13.7065 10.2649 13.6656 10.3556 13.6083 10.4358C13.551 10.516 13.4784 10.5841 13.3948 10.6363C13.3112 10.6884 13.2181 10.7235 13.1209 10.7397C13.0809 10.7462 13.0405 10.7497 13 10.75C12.8225 10.7497 12.6509 10.6866 12.5157 10.5717C12.3804 10.4569 12.2903 10.2978 12.2612 10.1228L11.7203 6.88094C10.5795 7.03969 9.42227 7.03969 8.28151 6.88094L7.74058 10.1228C7.71147 10.2982 7.62103 10.4575 7.48538 10.5723C7.34974 10.6872 7.1777 10.7502 6.99995 10.75C6.9585 10.7498 6.91712 10.7464 6.8762 10.7397C6.77898 10.7235 6.6859 10.6884 6.60227 10.6363C6.51864 10.5841 6.44611 10.516 6.38882 10.4358C6.33153 10.3556 6.29061 10.2649 6.26839 10.1689C6.24617 10.0729 6.24309 9.97346 6.25933 9.87625L6.81245 6.57438C5.60835 6.23912 4.46664 5.71069 3.43183 5.00969L1.6562 8.125C1.55675 8.2983 1.39252 8.425 1.19965 8.47722C1.00678 8.52943 0.801067 8.5029 0.627765 8.40344C0.454462 8.30398 0.327767 8.13976 0.27555 7.94689C0.223333 7.75402 0.249871 7.5483 0.349327 7.375L2.22433 4.09375C1.56573 3.52476 0.960125 2.89719 0.414952 2.21875C0.346964 2.14284 0.295158 2.05387 0.262698 1.95727C0.230238 1.86067 0.217804 1.75847 0.226156 1.65691C0.234507 1.55535 0.263469 1.45655 0.311273 1.36655C0.359077 1.27655 0.42472 1.19724 0.504196 1.13346C0.583672 1.06967 0.675313 1.02275 0.773525 0.995564C0.871737 0.968374 0.97446 0.961484 1.07542 0.975315C1.17639 0.989146 1.27347 1.02341 1.36075 1.07601C1.44804 1.12861 1.52368 1.19844 1.58308 1.28125C3.13933 3.20688 5.86183 5.5 9.99995 5.5C14.1381 5.5 16.8606 3.20406 18.4168 1.28125C18.4755 1.19675 18.551 1.12523 18.6386 1.07115C18.7261 1.01707 18.8238 0.98158 18.9257 0.966893C19.0275 0.952205 19.1313 0.958632 19.2306 0.985775C19.3298 1.01292 19.4224 1.06019 19.5026 1.12466C19.5828 1.18913 19.6489 1.26942 19.6968 1.36052C19.7446 1.45162 19.7732 1.5516 19.7807 1.65422C19.7883 1.75684 19.7746 1.85992 19.7406 1.95704C19.7066 2.05416 19.653 2.14324 19.5831 2.21875C19.0379 2.89719 18.4323 3.52476 17.7737 4.09375L19.6487 7.375C19.699 7.46054 19.7319 7.55521 19.7454 7.65353C19.7588 7.75186 19.7527 7.85188 19.7272 7.9478C19.7017 8.04372 19.6575 8.13364 19.597 8.21233C19.5366 8.29103 19.4611 8.35694 19.375 8.40625Z"
                      fill="#666666"
                      fillOpacity="0.5"
                    />
                  </svg>
                )}
              </button>
            </div>{" "} */}
            <Link className="w-[50%] " to={ROUTE_URL.FORGOT_PASSWORD}>
              <div className="text-[#0073E6] mt-4 text-[16px] w-[81%] font-opensans font-normal flex justify-end ">Forgot password?</div>
            </Link>
            <Link to={ROUTE_URL.RESUME_URL}>
              <div className="mt-5">
                <Button
                height="h-12"
                width="w-[81%]"
                bg="bg-corered"
                name={loading ? "loading..." : "Sign In"}
                color="text-white" type="submit"
              />
              </div>
            </Link>
          </form>
        </div>
      </div>
      {/* <Logo width="162" height="52" /> */}
      {/* <h1 className="mt-3">Add some text here</h1> */}
      {/* <form  className="md:w-1/3 w-[90%] border h-auto py-6 bg-white rounded mt-6 px-6">
        <p className="text-secondarygray">Please fill details:</p>
        <div className="mt-6">
          <Input
            label="Email"
            input={{
              type: "email",
              placeholder: "Christian@gmail.com",
              ...formik.getFieldProps("email"),
            }}
          />
          {formik.touched.email && formik.errors.email ? <span className="text-xs text-red-500">{formik.errors.email}</span> : null}
        </div>
        <div className="mt-3">
          <Input
            label="Password"
            input={{
              type: "password",
              placeholder: "******",
              ...formik.getFieldProps("password"),
            }}
          />
          {formik.touched.password && formik.errors.password ? <span className="text-xs text-red-500">{formik.errors.password}</span> : null}
        </div>
        <div className="text-red-400 text-sm flex justify-end mt-2 cursor-pointer">Forgotten password?</div>
       
      </form> */}
      {/* <div className='text-center text-xl my-3'>OR</div>
              <div className='space-y-3'>
                  <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                      <BsFacebook color='blue' size={24} />
                      <p>Sign In with Facebook</p>
                  </div>
                  <div className='flex justify-center items-center gap-2 cursor-pointer text-secondarygray border h-12 rounded'>
                      <FcGoogle size={24} />
                      <p>Sign In with Google</p>
                  </div>
              </div> */}
      {/* <p className="mt-3 text-sm text-secondarygray">
        I don't have an account Sign Up{" "}
        <Link to={ROUTE_URL.REGISTER_URL} className="text-red-400 cursor-pointer">
          here
        </Link>
      </p> */}
    </div>
  );
};

export default Login;
