import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Logo from '../../public/svgs/Logo';
import HomeButton from '../../components/Button';
import TopResume from '../../components/Home/TopResume';
import { colors, names, nextElementInList } from '../../utils/nextElementInList';
import { nameVariant } from '../../utils/nameVariant';
import { Link } from 'react-router-dom';
import { ROUTE_URL } from '../../routes/url';
import BottomResume from '../../components/Home/BottomResume';
import template from '../../public/images/template.png';
import laptop from '../../public/images/laptop.png';
import Input from '../../components/input';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Reveal } from '../../components/utils/Reveal';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import Footer from '../../components/footer';

const Home = () => {
  //state
  const [currentName, setCurrentName] = useState<string>(names[0]);
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);
  const [isNav, setIsNav] = useState<boolean>(false);
  const [view, setView] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextElementInList(names, currentName, setCurrentName);
      nextElementInList(colors, currentColor, setCurrentColor);
    }, 3700);
    return () => clearInterval(interval);
  }, [currentName]);

  return (
    <>
      {isNav && <div className='fixed flex top-0 left-0 inset-0 bg-black/90 overflow-y-hidden justify-center items-center flex-col z-50'>
        <div className='text-white'>
          {/* <div className='flex flex-col justify-center items-center w-full gap-16 text-2xl font-poppins text-white'>
            <div className='text-corered cursor-pointer'>Home</div>
            <div className='cursor-pointer hover:text-corered'>Template</div>
            <div className='cursor-pointer hover:text-corered'>Jobs</div>
            <div className='cursor-pointer hover:text-corered'>About</div>
          </div> */}
          <div className='mt-20'>
            <Link to={ROUTE_URL.LOGIN_URL}>
            <HomeButton
              bg='bg-corered'
              color='text-white'
              height='h-11'
              width='w-36'
              name='Get Started'
            />
          </Link>
          </div>
        </div>
      </div>}
    <section className='bg-white'>
      <div className='bg-white h-24 fixed w-full left-0 top-0 z-40 border-b border-[#E4E7EB]'>
        <div className='flex justify-between h-full w-[90%] mx-auto items-center'>
          <div>
            {view === 0 && <Logo width='122' height='42' />}
          </div>
          {/* <div className='md:flex gap-12 hidden text-md font-poppins text-simpleblack'>
            <div className='text-corered cursor-pointer'>Home</div>
            <div className='cursor-pointer hover:text-corered'>Template</div>
            <a href={ROUTE_URL.JOBS_URL} className='cursor-pointer hover:text-corered'>Jobs</a>
            <div className='cursor-pointer hover:text-corered'>About</div>
          </div> */}
          <div className='md:block hidden'>
            <Link to={ROUTE_URL.LOGIN_URL}>
            <HomeButton
              bg='bg-corered'
              color='text-white'
              height='h-11'
              width='w-36'
              name='Get Started'
            />
          </Link>
          </div>
          <div onClick={() => setIsNav(!isNav)} className='md:hidden block'>
            <FiMenu size={24} />
          </div>
        </div>
      </div>
      <span className={`absolute ${currentColor} -left-28 -top-28 rounded-full opacity-10 blur-3xl transition-all ease-in-out duration-700 aspect-square h-[400px] z-40 animate-pulse`} />
      <div className='md:pt-[6.2%] sm:pt-[30%] pt-[40%] md:w-[90%] w-[85%] mx-auto'>
        <div className='md:flex block justify-between gap-20 items-center md:h-[90vh] h-auto'>
          <div className='flex-1 md:w-1/2 w-full'>
            <Reveal>
              <h1 className='lg:text-7xl text-5xl font-bold font-opensans tracking-tighter leading-0'>
              <div className={`${nameVariant(currentName)} tracking-tighter transition-all duration-1000 ease-in-out delay-300 lg:text-8xl text-6xl`}>
                <TypeAnimation
                  sequence={[
                    `${names[0]}`, 3000,
                    `${names[1]}`, 3000,
                    `${names[2]}`, 3000,
                    `${names[3]}`, 3000
                  ]}
                  cursor={false}
                  repeat={Infinity}
                />
              </div>
              a career in tech.
            </h1>
            </Reveal>
            <Reveal>
              <p className='text-xl font-opensans font-light text-secondarygray mt-5 mb-8'>
              The template includes carefully structured sections for personal information, summary or objective, work experience, education, skills, projects, certifications, and more. You can easily customize these sections to fit your unique background.
            </p>
            </Reveal>
            <Reveal>
              <Link to={ROUTE_URL.LOGIN_URL}>
              <HomeButton
                bg='bg-corered'
                color='text-white'
                height='h-14'
                width='w-auto'
                name='Create Resume for free'
              />
            </Link>
            </Reveal>
          </div>
          <div className='font-opensans flex-1 space-y-6 md:ml-5 md:mt-0 md:pt-[32%] lg:pt-[23%] xl:pt-[3%] pt-[13%]'>
            <Reveal>
               <TopResume />
           </Reveal>
            <Reveal>
              <BottomResume />
            </Reveal>
          </div>
        </div>
        <Reveal>
          <h2 className='flex justify-center mt-24 text-[48px] text-corered font-poppins font-medium'>Features</h2>
        </Reveal>
        <div className='md:flex block justify-between md:mt-28 mt-10 gap-24'>
          <div className='flex-1'>
            <Reveal><p className='text-2xl font-medium text-primaryblack'>Templates</p></Reveal>
           <Reveal> <p className='text-[17px] text-simpleblack mt-3'>A variety of pre-designed and customizable resume templates catering to different industries, roles, and design preferences.</p></Reveal>
            <Reveal><img src={template} className='mt-10' alt="template" /></Reveal>
            <Reveal><p className='text-2xl font-medium text-primaryblack mt-10'>Customization Options</p></Reveal>
            <Reveal><p className='text-[17px] text-simpleblack mt-3'>Ability to customize templates by changing colors, layouts, and adding personal branding elements, drag-and-drop functionality to rearrange sections and content blocks.</p></Reveal>
          </div>
          <div className='flex-1'>
            <Reveal>
              <svg className='md:mt-0 mt-20' width="360" height="176" viewBox="0 0 360 176" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M174.13 103.926L175.533 104.46L174.13 103.926ZM345.602 174.926C346.074 175.595 347.016 175.751 347.707 175.275L358.96 167.525C359.65 167.049 359.827 166.122 359.355 165.453C358.883 164.785 357.941 164.629 357.251 165.104L347.248 171.994L340.411 162.311C339.939 161.643 338.997 161.487 338.307 161.962C337.616 162.438 337.439 163.365 337.911 164.034L345.602 174.926ZM1.40839 33.7876C1.9946 35.1461 1.99518 35.1458 1.9967 35.1452C1.99845 35.1444 2.00089 35.1434 2.00438 35.1419C2.01135 35.1389 2.02203 35.1343 2.03637 35.1282C2.06506 35.1159 2.10842 35.0974 2.16619 35.0728C2.28173 35.0236 2.4549 34.9502 2.68355 34.8541C3.14085 34.6617 3.82005 34.3783 4.704 34.0156C6.47194 33.2901 9.05866 32.2476 12.327 30.9823C18.8643 28.4513 28.1252 25.03 39.0129 21.4716C60.8085 14.348 89.0406 6.70229 114.971 4.51409C141.023 2.31554 164.172 5.6757 176.467 19.8898C188.694 34.025 190.754 59.6069 172.728 103.393L175.533 104.46C193.639 60.482 192.176 33.4147 178.792 17.9432C165.477 2.55062 140.929 -0.653441 114.768 1.55425C88.484 3.77229 59.9857 11.5033 38.1044 18.6549C27.1536 22.2339 17.8394 25.6749 11.2612 28.2217C7.97175 29.4952 5.36563 30.5455 3.58016 31.2781C2.68741 31.6445 1.99976 31.9314 1.53439 32.1271C1.30171 32.225 1.12458 32.3001 1.00517 32.3509C0.94546 32.3763 0.900179 32.3956 0.869595 32.4087C0.8543 32.4153 0.842681 32.4202 0.834768 32.4236C0.830813 32.4253 0.827668 32.4267 0.825684 32.4275C0.823469 32.4285 0.822186 32.429 1.40839 33.7876ZM172.728 103.393C168.199 114.393 165.115 123.179 163.316 130.045C161.529 136.863 160.961 141.962 161.634 145.496C161.975 147.291 162.655 148.783 163.756 149.871C164.873 150.975 166.304 151.545 167.906 151.697C170.994 151.99 174.889 150.746 179.23 148.65C187.997 144.415 199.709 136.126 212.829 126.402C226.003 116.637 240.659 105.378 255.456 95.0449C270.253 84.711 285.096 75.3729 298.589 69.456C312.147 63.5107 324.002 61.1736 333.02 64.3387C341.877 67.4473 348.546 76.0898 351.201 93.5294C353.857 110.976 352.421 136.88 345.364 173.818L348.341 174.312C355.418 137.265 356.927 110.973 354.197 93.0366C351.466 75.0933 344.419 65.1655 334.088 61.5394C323.917 57.9697 311.112 60.7336 297.397 66.7477C283.617 72.7903 268.573 82.2702 253.73 92.6358C238.886 103.002 224.147 114.324 211.032 124.044C197.861 133.806 186.388 141.906 177.933 145.989C173.663 148.051 170.438 148.947 168.254 148.74C167.22 148.642 166.476 148.302 165.926 147.759C165.36 147.199 164.879 146.305 164.612 144.898C164.066 142.03 164.485 137.464 166.248 130.733C168 124.049 171.029 115.4 175.533 104.46L172.728 103.393Z" fill="#EB5757" fill-opacity="0.9"/>
</svg>

            </Reveal>
            <div className='my-20'>
              <Reveal><p className='text-2xl font-medium text-primaryblack'>Free Cover Letter</p></Reveal>
           <Reveal> <p className='text-[17px] text-[#4E4D4D] mt-3'>With each of our professionally designed resume templates, you'll receive a FREE cover letter template that's perfectly matched to your chosen resume style. Our cover letter templates are designed to help you:</p></Reveal>
            </div>
            <Reveal>
              <svg width="345" height="250" viewBox="0 0 345 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.900474 227.153C0.187843 227.578 -0.0263705 228.486 0.422076 229.181L7.72973 240.504C8.17817 241.199 9.11941 241.417 9.83207 240.992C10.5447 240.567 10.7589 239.659 10.3105 238.964L3.81478 228.899L14.1378 222.74C14.8504 222.315 15.0646 221.407 14.6161 220.712C14.1677 220.017 13.2265 219.798 12.5138 220.223L0.900474 227.153ZM341.936 0.774549C325.418 113.191 300.092 183.39 249.383 218.723C198.706 254.035 122.159 254.869 2.05072 226.977L1.37416 229.845C121.511 257.744 199.316 257.268 251.186 221.124C303.025 185.003 328.443 113.601 344.954 1.22542L341.936 0.774549Z" fill="#EB5757" fill-opacity="0.9"/>
</svg>

            </Reveal>
          </div>
        </div>
        <div className='md:mt-52 mt-16 md:h-[447px] relative'>
          <div className='md:flex block justify-between md:mr-14 md:ml-14 gap-14'>
            <div className='flex-1'>
              <Reveal><p className='md:text-[60px] text-[40px] font-poppins font-medium leading-tight mt-7'>Join the <br /> ceVBuilder family</p></Reveal>
             <Reveal> <p className='text-xl font-poppins text-simpleblack leading-9 mt-5 w-[85%]'>We're thrilled to welcome you to the ceVBuilder family, where your journey to crafting exceptional resumes begins!</p></Reveal>
              <button className='bg-corered text-white w-[51%] h-[56px] rounded-[8px] mt-6'>Join ceVBuilder</button>
             </div>
            <div className='flex-1 md:mr-0 mr-10 md:mt-0 mt-10 md:ml-0 ml-10'>
              <Reveal><img className='' src={laptop} alt="laptop" /></Reveal>
            </div>
         </div>
            <div className='bg-[#0073E6]/10 h-[237px] w-full absolute -bottom-7' />
        </div>
      </div>
      <Footer />
      </section>
      </>
  );
};

export default Home;