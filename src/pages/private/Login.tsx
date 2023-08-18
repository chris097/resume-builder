import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/input";

import sideImg from "../../public/svgs/images/LoginPix.png";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_URL } from "../../routes/url";
import { useFormik } from "formik";
import { loginSchema } from "../../validator";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import { setAuthUser } from "../../helpers/api";

interface IProps {
  name: string
  active: number
}

const authTabs: {name: string, tab: number}[] = [
  {name: 'Login', tab: 1},
  {name: 'Register', tab: 2},
]

const RegiseterOrLoginUser = ({ name, active }: IProps) => {
  return (
    <div className="mt-[12px] ml-[94px]">
      <div className="border-b-[6px] w-[82%] relative flex">
        <div className={`w-1/2 ${active === 1 && "border-corered"} border-b-[6px] left-0 absolute`} />
      <div className={`w-1/2 ${active === 2 && "border-corered"} border-b-[6px] right-0 absolute`} />
      </div>
      <form className="w-[100%] mt-[55px]">
        <label className="text-[16px] font-normal  text-[#3B3B3B]" htmlFor="email">
          Email address
        </label>
        <br />
        <input
          className="w-[81%] text-[#3B3B3B] placeholder:text-[#666666] placeholder:opacity-50 h-[56px] mt-[12px] rounded-[8px] outline-[#3B3B3B] pl-[16px] border-[1px] border-[#CED4DA] "
          type="email"
          placeholder="Johndoe@gmail.com"
        />
        <br />
        <div className="mt-3">
          <Input
            label="Password"
            input={{
              type: "password",
              placeholder: "******",
            }}
          />
        </div>
        {active === 2 && <div className=" mt-3">
          <Input
            label="Comfirm Password"
            input={{
              type: "password",
              placeholder: "******",
            }}
          />
        </div>}
        <Link className="w-[50%] " to={ROUTE_URL.FORGOT_PASSWORD}>
          {active === 1 && <div className="text-[#0073E6] mt-4 text-[16px] w-[81%] font-opensans font-normal flex justify-end ">Forgot password?</div>}
        </Link>
        <Link to={ROUTE_URL.RESUME_URL}>
          <div className={` ${active === 1 ? "mt-5" : "mt-10"}`}>
            <Button
              height="h-12"
              width="w-[81%]"
              bg="bg-corered"
              name={name}
              color="text-white" type="submit"
            />
          </div>
        </Link>
      </form>
    </div>
  );
};

const Login = ({ handleLogin }: any) => {
  //   const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);
  const [current, setCurrent] = useState<boolean>(false);
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
            {authTabs.map((tab) => (
              <div onClick={() => {
                setActive(tab.tab)
              }} key={tab.tab} className="cursor-pointer">{tab.name}</div>
            ))}
          </div>
        </div>
        {active === 1 && <RegiseterOrLoginUser name="Login" active={active} />}
        {active === 2 && <RegiseterOrLoginUser name="Register" active={active} />}
      </div>
    </div>
  );
};

export default Login;
