import React from 'react'
import About from './template/about';
import Skill from './skills';
import Education from './education';
import Certification from './certification';
import WorkHistory from './workHistory';

const Resume = () => {
    return (
        <div className='w-full mb-5'>
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
        </div>
    );
};

export default Resume;