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
import FinalResume from '../FinalResume';

// const Cv = () => {
//   return (
//     <div className='w-full pl-[45%] pr-10 mb-5'>
//       <About />
//       <div className='w-full flex gap-1 mt-1'>
//         <div className='bg-white w-2/3'>
//           <Skill />
//           <Education />
//           <Certification />
//         </div>
//         <div className='bg-white w-full'>
//           <WorkHistory />
//         </div>
//       </div>
//     </div>
//   );
// };


const Template = React.forwardRef((props, ref: any) => {

  return (
    <>
      <div className='flex relative bg-primarygray'>
      <div className='border'><ResumeSection /></div>
      <div className='w-full pl-[45%] pr-10 mb-5'>
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
    </div>
      {/* <FinalResume /> */}
    </>
  );
});

export default Template;