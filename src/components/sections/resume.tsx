import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Input from "../input";
import UserInfo from "./UserInfo";

const ResumeSection = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <div className='w-[350px] md:block hidden relative'>
        <div className='fixed'>
          <div className='border-b py-2 mr-6 flex justify-between items-center text-basegray'>
            <span>Personal Information</span>
            <span><AiOutlineArrowRight /></span>
          </div>
          {/* <div className='mt-6 text-sm text-basegray'>RESUME SECTION</div> */}
          <div className="w-[350px] pr-6">
            <UserInfo />
          </div>
          <button onClick={() => logout(navigate)} type="button" className="text-sm font-light mt-32 hover:text-red-500 cursor-pointer flex space-x-2">
              <div>
                {/* <FiLogOut size="16px" /> */}
              </div>
              <div>Logout</div>
            </button>
        </div>
        {/* <div className="relative">
          <div className="fixed bottom-14">
            <button onClick={() => logout(navigate)} type="button" className="text-sm mt-4 font-light hover:text-red-500 cursor-pointer flex space-x-2">
              <div>
                <FiLogOut size="16px" />
              </div>
              <div>Logout</div>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ResumeSection;
