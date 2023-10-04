import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery'
import dateFormat from '../dateFormat';
import { SkeletonWorkHistory } from '../skeletonLoader';

const Education = () => {
  const { data, isLoading } = useQueryApi(CONSTANT_TEXT.GET_USER_EDUCATION, apiUrls.EDUCATION_URL);

      console.log('data:',data)
  
  return (
    <div className='px-6 py-6 w-full bg-white rounded-md h-auto font-poppins'>
        <div className='font-poppins text-lg mb-3'>Education</div>
      {isLoading ? <SkeletonWorkHistory /> : data?.data?.map((edu: {degree: string, program: string, school_name: string, start_date: string, end_date: string}, index:number) => (
          <div key={index} className='flex flex-col space-y-2 text-secondarygray font-sans text-sm'>
          <div className='text-secondarygray text-sm capitalize'>{edu.degree} in {edu.program}</div>
          <div className='text-secondarygray text-sm capitalize'>{edu.school_name}</div>
          <div className='text-secondarygray text-sm font-light'>{edu.start_date} - {edu.end_date ?? "till date"}</div>
        </div>
        ))}
    </div>
  )
}

export default Education