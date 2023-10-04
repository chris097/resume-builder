import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import UserInfo from "./UserInfo";
import UserExperience from "./UserExperience";
import Education from "./Education";
import TechnicalSkill from "./TechnicalSkill";
import About from "../template/about";
import Certification from "./Certification";

const ResumeSection = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const tabs: { tab: number; name: string, icon: any, has_data: any }[] = [
    {
      tab: 1, has_data: true, name: "Personal Information", icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_351_1325)">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.5 8.5C6.6249 8.5 5.1 6.9751 5.1 5.1C5.1 3.2249 6.6249 1.7 8.5 1.7C10.3751 1.7 11.9 3.2249 11.9 5.1C11.9 6.9751 10.3751 8.5 8.5 8.5ZM11.6943 9.07203C12.8554 8.13788 13.6 6.7065 13.6 5.1C13.6 2.2831 11.3169 0 8.5 0C5.6831 0 3.4 2.2831 3.4 5.1C3.4 6.7065 4.1446 8.13788 5.3057 9.07203C2.19555 10.2408 0 13.1283 0 17H1.7C1.7 12.75 4.75065 10.2 8.5 10.2C12.2494 10.2 15.3 12.75 15.3 17H17C17 13.1283 14.8044 10.2408 11.6943 9.07203Z" fill="#404653" />
        </g>
        <defs>
          <clipPath id="clip0_351_1325">
            <rect width="17" height="17" fill="white" />
          </clipPath>
        </defs>
      </svg>,
    },
    {
      tab: 2, has_data: true, name: "Experience", icon: <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.78005 20.2031H1C1 16.1935 4.32905 12.943 8.43563 12.943C8.61419 12.943 8.79127 12.9491 8.96675 12.9612M12.6846 5.68284C12.6846 7.97408 10.7822 9.83149 8.43563 9.83149C6.08901 9.83149 4.1867 7.97408 4.1867 5.68284C4.1867 3.39159 6.08901 1.53418 8.43563 1.53418C10.7822 1.53418 12.6846 3.39159 12.6846 5.68284ZM10.1244 20.2031L12.2754 19.7831C12.463 19.7465 12.5568 19.7281 12.6442 19.6946C12.7218 19.6649 12.7956 19.6264 12.864 19.5798C12.941 19.5273 13.0086 19.4613 13.1439 19.3292L17.56 15.0173C18.1467 14.4445 18.1467 13.5158 17.56 12.943C16.9734 12.3702 16.0222 12.3702 15.4355 12.943L11.0194 17.2549C10.8842 17.387 10.8165 17.453 10.7628 17.5283C10.7151 17.595 10.6757 17.6671 10.6452 17.7429C10.6109 17.8282 10.5922 17.9198 10.5546 18.1029L10.1244 20.2031Z" stroke="#000112" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
    },
    {
      tab: 3, has_data: true, name: "Technical Skills", icon: <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.72727 0V10.552H8.18182V0H5.72727ZM7.36364 9.74032H6.54545V0.811693H7.36364V9.74032ZM10.6364 8.92863H9.81818V3.24677H12.2727V8.1356C12.1309 8.1559 11.997 8.21317 11.8847 8.30159C11.7724 8.39 11.6858 8.50638 11.6337 8.63885L11.5216 8.92863H11.4545V4.05847H10.6364V8.92863ZM4.09091 6.49355H1.63636V10.552H4.09091V6.49355ZM3.27273 9.74032H2.45455V7.30524H3.27273V9.74032ZM8.18182 11.3637V12.1754H0V0H0.818182V11.3637H8.18182ZM13.0909 12.1754C12.7673 12.1754 12.4509 12.2706 12.1818 12.449C11.9127 12.6274 11.703 12.8809 11.5791 13.1775C11.4553 13.4742 11.4228 13.8006 11.486 14.1155C11.5491 14.4304 11.705 14.7197 11.9338 14.9467C12.1627 15.1737 12.4542 15.3283 12.7717 15.391C13.0891 15.4536 13.4181 15.4215 13.7171 15.2986C14.0161 15.1757 14.2717 14.9677 14.4515 14.7007C14.6313 14.4337 14.7273 14.1199 14.7273 13.7988C14.7273 13.3682 14.5549 12.9553 14.248 12.6509C13.9411 12.3464 13.5249 12.1754 13.0909 12.1754ZM13.0909 14.6105C12.9291 14.6105 12.7709 14.5629 12.6364 14.4737C12.5018 14.3845 12.3969 14.2577 12.335 14.1094C12.2731 13.9611 12.2569 13.7979 12.2884 13.6404C12.32 13.483 12.3979 13.3384 12.5124 13.2248C12.6268 13.1113 12.7726 13.034 12.9313 13.0027C13.09 12.9714 13.2545 12.9874 13.404 13.0489C13.5535 13.1103 13.6813 13.2144 13.7712 13.3478C13.8611 13.4813 13.9091 13.6383 13.9091 13.7988C13.9091 14.0141 13.8229 14.2205 13.6695 14.3727C13.516 14.525 13.3079 14.6105 13.0909 14.6105ZM16.4495 12.0642L17.0264 10.8158L16.0724 9.86857L14.7436 10.4562L14.2298 10.216L13.7471 8.92863H12.3971L11.8767 10.276L11.3425 10.4668L10.08 9.89048L9.126 10.8385L9.72082 12.1592L9.47945 12.6689L8.18182 13.1478V14.4871L9.54 15.0033L9.73227 15.5334L9.15136 16.7858L10.107 17.7323L11.4382 17.1422L11.952 17.3816L12.4347 18.6689H13.7847L14.3051 17.3215L14.8394 17.1308L16.1018 17.7071L17.0525 16.7566L16.4602 15.4384L16.7024 14.9287L18 14.4498V13.1105L16.6418 12.5942L16.4495 12.0642ZM17.1818 14.0147L16.1018 14.4124L15.6575 15.354L16.1673 16.4887L15.8318 16.824L14.7845 16.3467L13.797 16.699L13.3486 17.8573H12.8733L12.4715 16.7858L11.5225 16.3443L10.377 16.8532L10.0399 16.5196L10.5226 15.4782L10.1675 14.4993L9 14.0545V13.5829L10.08 13.1843L10.5251 12.2428L10.0121 11.1064L10.3484 10.772L11.3981 11.2509L12.3848 10.8986L12.8332 9.74032H13.3085L13.7103 10.8118L14.6577 11.2525L15.8007 10.7476L16.1378 11.0821L15.6592 12.121L16.0143 13.0983L17.1818 13.5431V14.0147Z" fill="#404653" />
      </svg>
      ,
    },
    {
      tab: 4, has_data: true, name: "Education", icon: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5105 4.73501L10.1906 0.0941259C10.1217 0.0334415 10.0334 0 9.942 0C9.8506 0 9.76229 0.0334415 9.69345 0.0941259L0.373535 4.73501C0.123565 4.73501 0 4.98583 0 5.23665C0 5.48747 0.123565 5.73829 0.373535 5.73829L9.69345 10.3777C9.81844 10.3777 9.81844 10.5039 9.942 10.5039C10.0656 10.5039 10.0656 10.5039 10.1906 10.3777L17.5221 6.74157V12.0088C17.5221 12.3843 17.772 12.6351 18.1442 12.6351C18.5177 12.6351 18.7648 12.3843 18.7648 12.0088V6.1138L19.5105 5.73829C19.7604 5.73829 19.884 5.48747 19.884 5.23665C19.884 4.98583 19.7604 4.73501 19.5105 4.73501ZM9.942 9.12364L1.9884 5.23665L9.942 1.34823L17.8956 5.23665L9.942 9.12364ZM15.4101 8.55464C15.7822 8.55464 16.0322 8.80546 16.0322 9.18097V14.9613C16.0322 15.086 15.9072 15.3368 15.6587 15.4629C13.8637 16.2882 11.9144 16.7158 9.942 16.717C7.83004 16.717 5.84022 16.3401 4.22535 15.4629C3.9768 15.4629 3.85182 15.2121 3.85182 14.9613V9.18097C3.85182 8.80546 4.10179 8.55464 4.4739 8.55464C4.84744 8.55464 5.09457 8.80546 5.09457 9.18097V14.5844C7.83004 15.8385 12.054 15.8385 14.7894 14.5844V9.18097C14.7894 8.80546 15.0366 8.55464 15.4101 8.55464Z" fill="#404653" />
      </svg>
      ,
    },
    {
      tab: 5, has_data: true, name: "Certification", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9.25005L7.84613 11.2501L12 6.75008M1.5 9.00008L5.25 2.50488H12.75L16.5 9.00008L12.75 15.4953H5.25L1.5 9.00008Z" stroke="#4E4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ,
    },
  ];

  console.log(currentIndex, currentTab)

  return (
    <>
      <div className="w-full relative">
        <div className="fixed flex lg:w-[45%] w-full bg-primarygray overflow-auto">
          <div className="lg:w-[270px] bg-white h-screen overflow-auto pt-10">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setCurrentTab(tab.tab);
                }}
                className={`mt-5 ${currentTab === index + 1 ? "lg:bg-corered/20  font-medium" : ""} 
                lg:px-10 pr-5 cursor-pointer items-center lg:gap-2 flex md:justify-start justify-center h-12 text-[#404653] text-sm w-[100px] lg:w-full`}
              >
                <div>{tab.icon}</div>
                <div className="lg:block hidden">{tab.name}</div>
              </div>
            ))}
          </div>
          <div className="lg:w-[60%] w-full bg-primarygray px-8 h-screen overflow-auto">
            {
              (tabs[currentIndex].tab === 1 && <UserInfo
                setCurrentIndex={setCurrentIndex}
                setCurrentTab={setCurrentTab}
                currentIndex={1}
                currentTab={1}
              />) ||
              (tabs[currentIndex].tab === 2 && <UserExperience
                setCurrentIndex={setCurrentIndex}
                setCurrentTab={setCurrentTab}
                currentIndex={2}
                currentTab={2}
              />) ||
              (tabs[currentIndex].tab === 3 && <TechnicalSkill
               setCurrentIndex={setCurrentIndex}
                setCurrentTab={setCurrentTab}
                currentIndex={3}
                currentTab={3}
              />) ||
              (tabs[currentIndex].tab === 4 && <Education
                setCurrentIndex={setCurrentIndex}
                setCurrentTab={setCurrentTab}
                currentIndex={4}
                currentTab={4}
              />) ||
              (tabs[currentIndex].tab === 5 && <Certification
              setCurrentIndex={setCurrentIndex}
                setCurrentTab={setCurrentTab}
                currentIndex={5}
                currentTab={5}
              />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeSection;
