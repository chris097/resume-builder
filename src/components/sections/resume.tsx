import React from "react";
// import { FaDownload } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
// import { AiTwotoneSetting } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../../utils/navLinks";
import { useAuth } from "../../context/authContext";

type Props = {
  handlePrint: () => void;
};

const ResumeSection: React.FC<Props> = (props) => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  return (
    <>
        <div className='w-[255px] md:block hidden relative'>
          <div className='fixed'>
            <div className='border-b py-2 text-basegray'>Personal Information</div>
          {/* <div className='mt-6 text-sm text-basegray'>RESUME SECTION</div> */}
          <div className='mt-4 flex flex-col space-y-3'>
          </div>
        </div>
        <div className="relative">
          <div className="fixed bottom-14">
            <button onClick={() => logout(navigate)} type="button" className="text-sm mt-4 font-light hover:text-red-500 cursor-pointer flex space-x-2">
              <div>
                <FiLogOut size="16px" />
              </div>
              <div>Logout</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeSection;
