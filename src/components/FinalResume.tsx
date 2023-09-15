import React from 'react'

const FinalResume = () => {
    return (
        <div className='mx-auto w-[94%] flex overflow-hidden'>
            <div className='flex-1'>
                <div className='flex items-center relative'>
                    <h2 className='text-5xl text-black/90 font-poppins'>Congratulations!</h2>
                    <div className='-ml-10'><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32.5" cy="32.5" r="32.5" fill="#0073E6" fillOpacity="0.24" />
                    </svg>
                    </div>
                </div>
                <p className='text-2xl'>Your resume is awesome ready for download. Get it in any format of your choice.</p>
            </div>
            <div className='flex-1'>Hello</div>
        </div>
    );
};

export default FinalResume;