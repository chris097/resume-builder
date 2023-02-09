import { TypeAnimation } from 'react-type-animation';
import Avatar from '../../public/svgs/avatar';

const TopResume = () => {


  return (
    <div className='border-gray-150 border bg-white shadow-shadowbase rounded w-full h-auto py-3 px-5'>
              <div className='flex gap-3'>
                <Avatar width='48' height='49' />
                <div>
                  <div>
            <h4 className='text-base font-light'>
              <TypeAnimation
                sequence={["Chrisian Chiemela", 1000, "Paul Walher", 1000, "Jane Doe", 1000]}
                repeat={Infinity}
              />
            </h4>
            <p className='text-[13px] font-light'>
              <TypeAnimation
                sequence={["Frontend Developer", 1000, "Software Daveloper", 1000, "Cloud Engineer", 1000]}
                repeat={Infinity}
              />
                  </p>
                 </div>
                  <div>
                     <h4 className='text-base font-light mt-2'>Address</h4>
            <p className='text-[13px] font-light'>
              <TypeAnimation
                sequence={[
                  "10 Deji Odunuga Street, Anthony Village, Lagos State", 1000,
                  "10 Deji Odunuga Street, Anthony Village, Imo State", 1000,
                  "10 Deji Odunuga Street, Anthony Village, Oyo State", 1000
                ]}
                repeat={Infinity}
              />
            </p>
                 </div>
                  <div>
                     <h4 className='text-base font-light mt-2'>Bio</h4>
            <p className='text-[13px] font-light'>
                <TypeAnimation
                sequence={[
                  "I’m a frontend developer with 3years experience in ReactJs and VueJs", 1000,
                  "I’m a software developer with 3years experience in VueJs and NodeJs", 1000,
                  "I’m a cloud developer with 3years experience in Java and Python", 1000
                ]}
                repeat={Infinity}
              />
            </p>
                 </div>
                </div>
              </div>
        </div>
  )
}

export default TopResume