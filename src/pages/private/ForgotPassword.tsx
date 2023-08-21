import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Button from "../../components/Button";
import sideImg from "../../public/svgs/images/LoginPix.png";
import { ROUTE_URL } from "../../routes/url";

function ForgotPassword() {
  const [loading, setLoading] = useState<boolean>(false);
  const { login, setUserName } = useAuth();
  return (
    <>
      <div className=" flex w-[100%] justify-between">
        <div className=" fixed w-[50%] ">
          <img className=" h-screen object-cover w-full" src={sideImg} alt="Logo" />
        </div>
        <div className=" w-[50%] mt-[15px] ml-[50%]">
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
          <div className=" text-center mt-[160px] ">
            <h1 className="text-[#000112] text-[28px] font-opensans font-[400]  ">Forgot Password</h1>
            <p className=" text-[#666666] mt-[11px] text-opacity-80 text-[14px] ">Enter the email address associated with your account</p>
          </div>
          <form>
            <div className="mt-[61px] ml-[91px]">
              <label className="text-[16px] font-normal  text-[#3B3B3B]" htmlFor="email">
                Email address
              </label>
              <br />
              <input className="w-[81%] text-[#3B3B3B] mb-[16px] placeholder:text-[#666666] placeholder:opacity-50  h-[56px] mt-[12px] rounded-[8px] outline-[#3B3B3B]  pl-[16px] border-[1px] border-[#CED4DA] " type="email" placeholder="" />
            </div>
            <div className="mt-5 ml-[91px]">
              <Link className="" to="">
                <div className=" h-[50px] w-[81%] bg-corered pt-[12px] text-center rounded-[8px]  text-white ">Send</div>
              </Link>
              {/* <Button height="h-12" width="w-[81%]" bg="bg-corered" name={loading ? "loading..." : "Send"} color="text-white" type="submit" /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
