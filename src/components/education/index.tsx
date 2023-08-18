import useQueryApi from '../../helpers/useQuery'
import dateFormat from '../dateFormat';
import { SkeletonWorkHistory } from '../skeletonLoader';

const Education = () => {
  // const { data, isLoading } = useQueryApi(['education'], 'user/education');
  // const educations = data?.data;
  
  return (
    <div className='px-6 py-7 w-full bg-white rounded-md h-[192px]'>
        <div className='font-medium text-xl mb-5'>Education</div>
        <div className='flex flex-col space-y-2'>
          <div className='text-secondarygray text-sm capitalize'>Diploma in Mechactronic Engineering</div>
          <div className='text-secondarygray text-sm capitalize'>Federal Polytechnic, Nekede</div>
          <div className='text-secondarygray text-sm font-light'>2014 - 2016</div>
        </div>
    </div>
  )
}

export default Education