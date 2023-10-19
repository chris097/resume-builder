import React from 'react';
import Input from '../../components/input';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { Reveal } from '../utils/Reveal';
import Logo from '../../public/svgs/Logo';

const Footer = () => {
  return (
    <>
      <Reveal>
        <div className='mt-56 border-t py-16'>
          <div className='w-[90%] mx-auto'>
            <div className='md:flex block md:justify-between'>
              <div>
                <Logo width='180px' height='56px' />
                <p className='font-poppins text-lg mt-16'>Updates right to your Inbox</p>
                <div className='flex items-center gap-4 mt-2'>
                  <Input
                    container="w-[320px]"
                    label=""
                    labelStyle="text-coregray text-base font-normal"
                    handleClick=""
                    icon=""
                    inputContainer="w-full h-[54px] flex items-center rounded-[8px] border border-[#CED4DA] px-3 mt-1"
                    inputStyle="w-full h-full focus:outline-none text-basegray text-sm"
                    input={{
                      type: "text",
                    }}
                  />
                  <button className='bg-corered text-white h-[54px] px-4 rounded-[8px]'>Subscribe</button>
                </div>
              </div>
              <div>
                <div className='flex md:justify-start justify-between md:mt-0 mt-16 gap-14'>
                  <div>
                    <p className='font-poppins text-lg font-medium'>Our story</p>
                    <p className='text-lg font-poppins text-[#404653] mt-3'>FAQ</p>
                    <p className='text-lg font-poppins text-[#404653] mt-2'>Contact</p>
                  </div>
                  <div>
                    <p className='font-poppins text-lg font-medium'>Services</p>
                    <p className='text-lg font-poppins text-[#404653] mt-3'>Build Resume</p>
                    <p className='text-lg font-poppins text-[#404653] mt-2'>Cover Letter</p>
                    <p className='text-lg font-poppins text-[#404653] mt-2'>Template</p>
                  </div>
                  <div>
                    <p className='font-poppins text-lg font-medium'>About us</p>
                    <p className='text-lg font-poppins text-[#404653] mt-3'>Developers</p>
                    <p className='text-lg font-poppins text-[#404653] mt-2'>Meet our team</p>
                    <p className='text-lg font-poppins text-[#404653] mt-2'>Join ceVBuilder</p>
                  </div>
                </div>
                <div className='flex justify-center md:mt-14 mt-20 gap-8 items-center'>
                  <BsFacebook color='#EB5757' size={28} />
                  <BsLinkedin color='#EB5757' size={24} />
                  <AiFillTwitterCircle color='#EB5757' size={32} />
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-6 text-primaryblack md:text-lg text-sm md:mt-32 mt-20 font-medium items-center'>
              <p>© ceVBuilder 2023</p>
              <p>Privacy policy</p>
              <p>Terms of use</p>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Footer;