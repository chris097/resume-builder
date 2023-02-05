import { useRef } from 'react'
import { useDashboardContext } from '../../context/dashboardContext';
import Sidebar from '../../components/Sidebar';
import Template from '../../components/template';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { ROUTE_URL } from '../../routes/url';


const Resume = () => {

  const { showNav } = useDashboardContext()
  const printRef: any = useRef();

  const { isData: data } = useDashboardContext();
  
  // if (
  //   !data?.user?.length ||
  //   !data?.certificate?.length ||
  //   !data?.history?.length ||
  //   !data?.skill?.length ||
  //   !data?.education?.length
  // ) {
  //   return <div className='flex flex-col items-center justify-center max-w-4xl md:w-full w-[90%] mx-auto md:space-x-16 mt-14 border-dashed border-2 h-64 rounded mb-28'>
  //     <div className='text-center w-full'>
  //       <h1 className='text-2xl text-secondarygray mb-4'>You are yet to build a resume template for yourself!</h1>
  //       <Link to={ROUTE_URL.PROFESSION_SUMMARY_URL}>
  //         <Button
  //         name='Create'
  //         bg='bg-red-500'
  //         width='w-44'
  //         height='h-14'
  //         type='button'
  //         color='text-white'
  //       />
  //       </Link>
  //     </div>
  //   </div>
  // }
  return (
    <div>
      {showNav === false ? "" : <Sidebar />}
      <Template ref={printRef} />
    </div>
  )
};

export default Resume;