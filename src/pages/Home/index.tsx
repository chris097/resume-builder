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

const Home = () => {
  //state
  const [currentName, setCurrentName] = useState<string>(names[0]);
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextElementInList(names, currentName, setCurrentName);
      nextElementInList(colors, currentColor, setCurrentColor);
    }, 3700);
    return () => clearInterval(interval);
  }, [currentName]);

  return (
    <section>
      <div className='bg-white h-24 fixed w-full left-0 top-0 z-50 border-b'>
        <div className='flex justify-between h-full w-[90%] mx-auto items-center'>
          <div>
            <Logo width='122' height='42' />
          </div>
          <Link to={ROUTE_URL.LOGIN_URL}>
            <HomeButton
              bg=''
              color='text-white'
              height='h-11'
              width='w-32'
              name=''
            />
          </Link>
        </div>
      </div>
      <span className={`absolute ${currentColor} -left-28 -top-28 rounded-full opacity-10 blur-3xl transition-all ease-in-out duration-700 aspect-square h-[400px] -z-10 animate-pulse`} />
      <div className='mt-24 w-[90%] mx-auto'>
        <div className='md:flex block justify-between gap-20 items-center md:h-[90vh] h-auto'>
          <div className='flex-1 md:w-1/2 w-full'>
            <h1 className='text-7xl font-bold font-opensans tracking-tighter leading-0'>
              <div className={`${nameVariant(currentName)} tracking-tighter transition-all duration-1000 ease-in-out delay-300 text-8xl`}>
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
            <p className='text-xl font-opensans font-light text-secondarygray mt-5 mb-8'>
              The template includes carefully structured sections for personal information, summary or objective, work experience, education, skills, projects, certifications, and more. You can easily customize these sections to fit your unique background.
            </p>
            <Link to={ROUTE_URL.LOGIN_URL}>
              <HomeButton
                bg='bg-corered'
                color='text-white'
                height='h-14'
                width='w-44'
                name='Get Started'
              />
            </Link>
          </div>
          <div className='font-opensans flex-1 space-y-6 md:ml-5 md:mt-0 mt-10'>
            <TopResume />
            <BottomResume />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;