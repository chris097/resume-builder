import { useState } from "react";
import sideImg from "../../public/images/LoginPix.png";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../routes/url";
import LoginUser from "../../components/sections/LoginUser";
import RegisterUser from "../../components/sections/RegisterUser";


const authTabs: {name: string, tab: number}[] = [
  {name: 'Login', tab: 1},
  {name: 'Register', tab: 2},
]


const Login = () => {

  const [active, setActive] = useState<number>(1);

  return (
    <div className="flex w-[100%] justify-between">
      <div className=" fixed w-[50%] md:block hidden">
        <img className=" h-screen object-cover w-full" src={sideImg} alt="Logo" />
      </div>
      <div className=" md:w-[50%] w-full bg-white h-screen pt-[15px] md:ml-[50%]">
        <div className="w-[90%] mx-auto">
          <Link to={ROUTE_URL.HOME_URL}>
            <div className="md:ml-[24px]">
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
          <div className="flex justify-between mt-[80px] text-[16px] text-[#000112] font-[500] font-opensans md:ml-[94px] md:w-[70%]">
            {authTabs.map((tab) => (
              <div onClick={() => {
                setActive(tab.tab)
              }} key={tab.tab} className="cursor-pointer">{tab.name}</div>
            ))}
          </div>
        </div>
        <div className="mt-[12px] md:ml-[94px] w-[90%] mx-auto">
      <div className="border-b-[6px] md:w-[82%] w-full relative flex">
        <div className={`w-1/2 ${active === 1 && "border-corered"} border-b-[6px] left-0 absolute`} />
      <div className={`w-1/2 ${active === 2 && "border-corered"} border-b-[6px] right-0 absolute`} />
      </div>
      {active === 1 && <LoginUser />}
      {active === 2 && <RegisterUser />}
    </div>
      </div>
    </div>
  );
};

export default Login;
