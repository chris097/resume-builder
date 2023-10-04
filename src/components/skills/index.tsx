import { GrStatusGood } from 'react-icons/gr';
import useQueryApi from '../../helpers/useQuery';
import { apiUrls } from '../../helpers/api/url';


const Skill = () => {

  const { data, isLoading } = useQueryApi('skill', apiUrls.TECHNICAL_SKILL);

  const items = data?.skills[0]?.name;

  const separator = <GrStatusGood size={15} color="#D61355" />;
  
  return (
    <div className='px-6 pt-7 bg-white rounded-md h-auto'>
      <div className='text-lg mb-3 font-poppins'>Technical Skills</div>
      <div className='flex flex-wrap gap-3 items-center'>
      {isLoading ? "Loading..." : (!items?.length ? "No data." : items.map((item:any, index:number) => (
        <div className='flex items-center text-secondarygray font-sans lg:text-sm text-xs gap-1' key={index}>
          {index < items.length && separator}
          {item}
        </div>
      )))}
    </div>
    </div>
  );
};

export default Skill;