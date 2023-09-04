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


const Template = React.forwardRef((props, ref: any) => {

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div className='fixed bottom-10 flex justify-center left-0 z-50 right-0'>
        <div className='bg-white shadow w-[300px] rounded-full h-14 flex justify-between px-10 items-center'>
          <button onClick={() => zoomIn()}><AiOutlineZoomIn size={23} /></button>
          <button onClick={() => zoomOut()}><AiOutlineZoomOut size={23} /></button>
          <button onClick={() => resetTransform()}><RxReset size={23} /></button>
        </div>
      </div>
    );
  };

  return (
    <div className='flex relative bg-primarygray'>
      <div className=' border'><ResumeSection /></div>
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
      {/* <TransformWrapper>
        <Controls />
        <TransformComponent> */}
          {/* <div className='bg-primarygray h-auto rounded-md z-40 w-3/6 px-6 py-8'> 
            <About />
            <div className='w-full flex gap-4 mt-4'>
              <div className='bg-white w-2/3'>
                <Skill />
                <Education />
                <Certification />
              </div>
              <div className='bg-white w-full'>
                <WorkHistory />
              </div>
            </div>
          </div> */}
        {/* </TransformComponent>
      </TransformWrapper> */}
    </div>
  );
});

export default Template;