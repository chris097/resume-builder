import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Logo from '../../public/svgs/Logo';
import HomeButton from '../../components/Button';
import TopResume from '../../components/Home/TopResume';
import { names, nextElementInList } from '../../utils/nextElementInList';
import { nameVariant } from '../../utils/nameVariant';
import { Link } from 'react-router-dom';
import { ROUTE_URL } from '../../routes/url';
import BottomResume from '../../components/Home/BottomResume';

const Home = () => {
  //state
  const [currentName, setCurrentName] = useState<string>(names[0]);

  // variables
  let name: string = names[0]
  
  useEffect(() => {
    const interval = setInterval(() => {
      name = nextElementInList(names, name, setCurrentName);
    }, 3700);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className='bg-white h-24 fixed w-full left-0 top-0 z-50 border-b'>
        <div className='flex justify-between h-full max-w-7xl mx-auto items-center'>
          <div>
            <Logo width='122' height='42' />
          </div>
          <Link to={ROUTE_URL.LOGIN_URL}>
            <HomeButton
            bg='bg-corered'
            color='text-white'
            height='h-11'
            width='w-24'
            name='Sign In'
          />
          </Link>
        </div>
      </div>
      <div className='mt-24 max-w-7xl mx-auto'>
        <div className='flex justify-between gap-20 items-center h-[90vh]'>
          <div className='flex-1 w-1/2'>
            <h1 className='text-7xl font-bold font-opensans tracking-tighter leading-0'>
              <div className={`${nameVariant(currentName)} tracking-tighter text-8xl`}>
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
            <p className='text-2xl font-opensans font-light text-secondarygray mt-5 mb-8'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <HomeButton
              bg='bg-corered'
              color='text-white'
              height='h-14'
              width='w-44'
              name='Get Started'
            />
          </div>
          <div className='font-opensans flex-1 space-y-6 ml-5'>
            <TopResume />
            <BottomResume />
          </div>
        </div>
        <div className='mt-24'>
          <h1 className='font-opensans text-7xl font-semibold'>How it works?</h1>
          <div className='flex justify-between mt-24 gap-10'>
            <div className='flex-1 py-3'>
              <div className='flex gap-4 border-gray-50 border p-5 w-4/6 rounded-md bg-white shadow'>
                <div className='bg-slate-200 animate-pulse rounded-full w-14 h-14' />
                <div className=' space-y-2'>
                  <div className='bg-slate-200 animate-pulse rounded-full w-44 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-52 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-64 h-4' />
                </div>
              </div>
              <div className='flex gap-4 border-gray-50 border mt-4 p-5 w-5/6 rounded-md bg-white shadow'>
                <div className='bg-slate-200 animate-pulse rounded w-14 h-14' />
                <div className=' space-y-2'>
                  <div className='bg-slate-200 animate-pulse rounded-full w-44 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-52 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-64 h-4' />
                </div>
              </div>
            </div>
            <div className='flex-1 border'>Text</div>
          </div>
          <div className='flex flex-row-reverse justify-between mt-24 gap-10'>
            <div className='flex-1 py-3'>
              <div className='flex gap-4 border-gray-50 border p-5 w-4/6 rounded-md bg-white shadow'>
                <div className='bg-slate-200 animate-pulse rounded-full w-14 h-14' />
                <div className=' space-y-2'>
                  <div className='bg-slate-200 animate-pulse rounded-full w-44 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-52 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-64 h-4' />
                </div>
              </div>
              <div className='flex gap-4 border-gray-50 border mt-4 p-5 w-5/6 rounded-md bg-white shadow'>
                <div className='bg-slate-200 animate-pulse rounded w-14 h-14' />
                <div className=' space-y-2'>
                  <div className='bg-slate-200 animate-pulse rounded-full w-44 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-52 h-4' />
                <div className='bg-slate-200 animate-pulse rounded-full w-64 h-4' />
                </div>
              </div>
            </div>
            <div className='flex-1 border'>Text</div>
          </div>
        </div>
        <div>More</div>
      </div>
    </section>
  )
};

export default Home;