import { useRef } from 'react'
// import { exportComponentAsPDF } from 'react-component-export-image';
import { useNavContext } from '../../context/navContext';
// import ResumeSection from '../../components/sections/resume';
import Sidebar from '../../components/Sidebar';
import Template from '../../components/template';
import useQueryApi from '../../helpers/useQuery';
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';


const Resume = () => {

  const { showNav } = useNavContext();
  const printRef: any = useRef();

  const { isLoading, data } = useQueryApi([CONSTANT_TEXT.GET_ABOUT], apiUrls.USER_INFO)

  if (!data.data.user.length && !data.data.certificate.length && !data.data.history.length && !data.data.skill.length && !data.data.education.length) {
    return <div className='flex max-w-4xl md:w-full w-[90%] mx-auto md:space-x-16 mt-14 border-dashed border-2 h-64 rounded mb-28'>
      <div className='text-center w-full'>No data found...</div>
    </div>
  }
  return (
    <div>
      {showNav === false ? "" : <Sidebar />}
         
        {/* <ResumeSection handlePrint={() => exportComponentAsPDF(printRef, {
          pdfOptions: {
            w: 200,
            h: 200,
            x: 40,
            y: 5,
            orientation: 'p',
            pdfFormat: 'letter'
          }})} /> */}
        <Template ref={printRef} />
      </div>
  )
}

export default Resume