import React from 'react'
import About from './template/about';
import Skill from './skills';
import Education from './education';
import Certification from './certification';
import WorkHistory from './workHistory';
import { useDashboardContext } from '../context/dashboardContext';
import useQueryApi from '../helpers/useQuery';

const Resume = () => {

    const { data, isFetching } = useQueryApi("all", "user/information");

    if (isFetching) return <div className='text-center mt-20'>Loading...</div>;

    return (
        <>
            {data?.percentage === "100" ? <div className='w-full mb-5'>
                <About />
                <div className='w-full flex gap-1 mt-1'>
                    <div className='bg-white w-2/3'>
                        <Skill />
                        <Education />
                        <Certification />
                    </div>
                    <div className='bg-white w-full'>
                        <WorkHistory />
                    </div>
                </div>
            </div> :
                <div className='flex justify-center h-screen mx-auto -mt-32 w-[80%] flex-col'>
                    <p className="text-sm text-coregray px-10 font-poppins">Progress</p>
                    <div className="px-10 mt-1 lg:flex items-center gap-2 hidden">
                        <div className="bg-[#D9D9D9] w-full h-3 rounded-full relative">
                            <span className={`bg-corered w-[${data?.percentage}%] rounded-tr-full rounded-br-full h-3 z-50 transition-all ease-in-out duration-700 delay-500 rounded-tl-full rounded-bl-full absolute`} />
                        </div>
                        <span className="text-xs text-[#666666] transition-all ease-in-out duration-1000 delay-500">
                            {`${data?.percentage}%`}
                        </span>
                    </div>
                </div>
            }
        </>
    );
};

export default Resume;