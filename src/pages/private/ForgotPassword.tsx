import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sideImg from "../../public/svgs/images/LoginPix.png";
import { ROUTE_URL } from "../../routes/url";
import Input from "../../components/input";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../validator";
import { forgotPassword } from "../../service";
import toast from "react-hot-toast";


function ForgotPassword() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const initialValues: {email: string} = {
    email: ""
  }

  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const respones = await forgotPassword(values);
      if (respones.status === "success") {
        setIsLoading(false);
        navigate(ROUTE_URL.VERIFICATION);
        toast.success(respones.message);
      } else {
        toast.error(respones.message);
        setIsLoading(false);
      }
    }
  });
  

  return (
    <>
      <div className=" flex w-[100%] justify-between">
        <div className="fixed w-[50%] md:block hidden">
          <img className=" h-screen object-cover w-full" src={sideImg} alt="Logo" />
        </div>
        <div className="md:w-[50%] bg-white h-screen pt-[15px] md:ml-[50%]">
          <div className="">
            <Link to={ROUTE_URL.LOGIN_URL}>
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
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-[180px] w-[90%] mx-auto">
            <h1 className="text-[28px] mb-[11px] text-center text-[#000112]">Forgot Password</h1>
            <p className="text-[#666666] text-center text-opacity-80 text-[14px]">Enter the email address associated with your account</p>
            <Input
              container="md:ml-[91px] mt-[60px] md:w-[81%]"
              label="Email address"
              labelStyle="text-coregray text-base font-normal"
              handleClick=""
              icon=""
              inputContainer="md:w-[89%] w-full h-[56px] flex items-center rounded-[8px] border border-[#CED4DA] px-3 mt-1"
              inputStyle="w-full h-full focus:outline-none text-basegray text-sm"
              input={{
                type: "email",
                placeholder: "johndoe@gmail.com",
                ...formik.getFieldProps("email"),
              }}
            />
            <p className="text-xs text-corered md:ml-[91px] mt-1 font-opensans">{formik.errors.email && formik.touched.email ? formik.errors.email : null}</p>
            <div className="mt-10 md:ml-[91px]">
              <button
                type="submit"
                className="h-12 md:w-[84%] w-full rounded-[8px] text-center bg-corered text-white">
                {isLoading ? "Loading..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
