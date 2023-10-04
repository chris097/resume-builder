import React from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { RxReset } from "react-icons/rx";
import Certification from '../certification';
import Education from '../education';
import ResumeSection from '../sections/resume';
import Skill from '../skills';
import WorkHistory from '../workHistory';
import About from './about';
import Resume from '../Resume';


const Template = React.forwardRef((props, ref: any) => {

  return (
    <>
      <div className='flex relative bg-primarygray'>
      <div className='border'><ResumeSection /></div>
      <div className='w-full pl-[45%] pr-10 mb-5 lg:block hidden'>
          <Resume />
    </div>
    </div>
      {/* <FinalResume /> */}
    </>
  );
});

export default Template;