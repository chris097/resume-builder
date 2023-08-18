import React from 'react'
// import { fetchApi } from '../../helpers/api/fetchApi'
// import useQueryApi from '../../helpers/useQuery'
import Certification from '../certification'
import Education from '../education'
import PortfolioContact from '../portfolioContact'
import ResumeSection from '../sections/resume'
import Skill from '../skills'
import WorkHistory from '../workHistory'
import About from './about'


const Template = React.forwardRef((props, ref: any) => {

  return (
    <div className='flex max-w-6xl md:w-full w-[90%] mx-auto md:space-x-16 mt-14 mb-28'>
      <ResumeSection handlePrint={() => console.log('download')} />
      <div ref={ref} className='bg-primarygray h-auto rounded-md w-full px-6 py-8'>
      <About />
        <div className='w-full flex gap-4 mt-4'>
          <div className='bg-white w-2/3'>
            <Skill />
            {/* <PortfolioContact /> */}
            <Education />
            <Certification />
          </div>

          <div className='bg-white w-full'>
            <WorkHistory /> 
          </div>

        {/* <WorkHistory /> */}
        {/* <div className='md:flex md:gap-6 block w-full'>
          <PortfolioContact />
          <Skill />
        </div> */}
        {/* <div className='md:flex md:gap-6 block w-full'>
          <Education />
          <Certification />
        </div> */}
      </div>
    </div>
    </div>
  )
})

export default Template;