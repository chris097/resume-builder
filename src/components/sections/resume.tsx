import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import UserInfo from "./UserInfo";
import UserExperience from "./UserExperience";
import Education from "./Education";
import TechnicalSkill from "./TechnicalSkill";

const ResumeSection = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const tabs: { tab: number; name: string }[] = [
    { tab: 1, name: "Information" },
    { tab: 2, name: "Experience" },
    { tab: 3, name: "Technical Skills" },
    { tab: 4, name: "Others" },
  ];

  return (
    <>
      <div className="w-[350px] md:block hidden relative">
        <div className="fixed">
          <div className="border-b pt-2 mr-6 text-xs flex justify-between items-center text-basegray">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setCurrentTab(tab.tab);
                }}
                className={`${currentTab === tab.tab && "border-b border-corered"} hover:text-corered transition-all duration-1000 ease-in-out cursor-pointer  pb-2`}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div className="w-[350px] pr-6">
            {(tabs[currentIndex].tab === 1 && <UserInfo />) || (tabs[currentIndex].tab === 2 && <UserExperience />) || (tabs[currentIndex].tab === 3 && <TechnicalSkill />) || (tabs[currentIndex].tab === tabs.length && <Education />)}
          </div>
          <button onClick={() => logout(navigate)} type="button" className="text-sm font-light mt-20 hover:text-red-500 cursor-pointer flex space-x-2">
            <div></div>
            <div>Logout</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeSection;
