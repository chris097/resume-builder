import { GrStatusGood } from 'react-icons/gr';



const skills: string[] = ["Javascript", "CSS3", "React.JS", "Typescript", "HTML5", "TailwindCSS", "Node.JS", "Quality Focus", "Next.JS"]

const Skill = () => {
  return (
    <div className='px-6 pt-7 bg-white rounded-md h-auto'>
      <div className='text-lg mb-3 font-poppins'>Technical Skills</div>
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill, index) => (
          <div key={index} className='items-center flex mb-2'>
            <div className='mr-1'>
              <GrStatusGood size={15} color="#D61355" />
            </div>
            <span className='text-secondarygray font-sans text-sm'>
              <div>{skill}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;