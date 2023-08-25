import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Input from "../input";

const ResumeSection = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <div className="w-[350px] md:block hidden relative">
        <div className="fixed">
          <div className="border-b py-2 mr-6 flex justify-between items-center text-basegray">
            <span>Personal Information</span>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
          {/* <div className='mt-6 text-sm text-basegray'>RESUME SECTION</div> */}
          <div className="w-[350px] pr-6">
            <div className="mt-3 flex w-full space-x-3">
              <Input
                container="w-full"
                label="Full Name"
                labelStyle="text-coregray text-xs font-normal"
                handleClick=""
                icon=""
                inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                input={{
                  type: "text",
                }}
              />
              <Input
                container="w-full"
                label="Email"
                labelStyle="text-coregray text-xs font-normal"
                handleClick=""
                icon=""
                inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                input={{
                  type: "text",
                }}
              />
            </div>
            <div className="mt-3 flex w-full space-x-3">
              <Input
                container="w-full"
                label="Phone No."
                labelStyle="text-coregray text-xs font-normal"
                handleClick=""
                icon=""
                inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                input={{
                  type: "text",
                }}
              />
              <Input
                container="w-full"
                label="Portfolio"
                labelStyle="text-coregray text-xs font-normal"
                handleClick=""
                icon=""
                inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                input={{
                  type: "text",
                }}
              />
            </div>
            <div className="mt-3 flex w-full space-x-3">
              <Input
                container="w-full"
                label="Address"
                labelStyle="text-coregray text-xs font-normal"
                handleClick=""
                icon=""
                inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                input={{
                  type: "text",
                }}
              />
            </div>
            <div className="mt-3 w-full">
              {/* <Input
                container="w-full"
                label="Bio"
                labelStyle="text-coregray text-xs font-normal"
                handleClick=""
                icon=""
                inputContainer="w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1"
                inputStyle="w-full h-full focus:outline-none bg-transparent text-basegray text-xs"
                input={{
                  type: "text",
                }}
              /> */}
              <label className="text-xs">Bio</label>
              <textarea value="" className="w-full h-32 flex items-center bg-primarygray rounded mt-1" />
            </div>
          </div>
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
