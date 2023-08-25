// import React, { useEffect } from 'react'
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery';
import { GrStatusGood } from 'react-icons/gr';
import { SkeletonWorkHistory } from '../skeletonLoader';
// import Range from '../../public/svgs/range'

const skills: string[] = ["Javascript", "CSS3", "React.JS", "Typescript", "HTML5", "TailwindCSS", "Node.JS", "Quality Focus", "Next.JS"]

const Skill = () => {
  return (
    <div className='px-6 pt-7 bg-white rounded-md h-auto'>
      <div className='font-medium text-xl mb-5'>Technical Skills</div>
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill, index) => (
          <div key={index} className='items-center flex mb-2'>
            <div className='mr-1'>
              <GrStatusGood size={15} color="#D61355" />
            </div>
            <span className='text-secondarygray text-sm font-light'>
              <div>{skill}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill