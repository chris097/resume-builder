import useQueryApi from '../../helpers/useQuery'
import dateFormat from '../dateFormat';

const Education = () => {
  const { data, isLoading } = useQueryApi(['education'], 'user/education');
  const educations = data?.data;
  
  return (
    <div className='px-6 py-7 w-full bg-white mb-4 rounded-md h-[164.74px]'>
        <div className='font-medium text-xl mb-5'>Education</div>
      {isLoading ? " " : educations?.map((school:any, index:any) => (
        <div key={index} className='flex flex-col space-y-2'>
          <div className='text-secondarygray text-sm capitalize'>{school.degree} in {school.field}</div>
          <div className='text-secondarygray text-sm capitalize'>{school.school_name}</div>
          <div className='text-secondarygray text-sm font-light'>{dateFormat(school.start_date)} - {dateFormat(school.end_date)}</div>
        </div>
      ))}
    </div>
  )
}

export default Education