import React from 'react'
import Input from '../input'

const Certification = () => {
    return (
        <div className='mt-7'>
            <Input
                handleClick=""
                icon=""
                inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                labelStyle='text-coregray text-xs font-normal'
                label='Cerfication #1'
                container='w-full mt-3'
                input={{
                    type: "text",
                    placeholder: "BSc"
                }}
            />
            <Input
                handleClick=""
                icon=""
                inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                labelStyle='text-coregray text-xs font-normal'
                label='Cerfication #2'
                container='w-full mt-3'
                input={{
                    type: "text",
                    placeholder: "BSc"
                }}
            />
            <Input
                handleClick=""
                icon=""
                inputContainer='w-full h-[42px] flex items-center bg-primarygray rounded mt-1'
                inputStyle='w-full h-full focus:outline-none bg-transparent bg-white border px-3 border-[#E4E7EB] text-basegray text-xs'
                labelStyle='text-coregray text-xs font-normal'
                label='Cerfication #3'
                container='w-full mt-3'
                input={{
                    type: "text",
                    placeholder: "BSc"
                }}
            />
            <div className='flex gap-2 items-center mt-6'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.625 7.5C10.625 7.15483 10.3452 6.875 10 6.875C9.65483 6.875 9.375 7.15483 9.375 7.5V9.375H7.5C7.15483 9.375 6.875 9.65483 6.875 10C6.875 10.3452 7.15483 10.625 7.5 10.625H9.375V12.5C9.375 12.8452 9.65483 13.125 10 13.125C10.3452 13.125 10.625 12.8452 10.625 12.5V10.625H12.5C12.8452 10.625 13.125 10.3452 13.125 10C13.125 9.65483 12.8452 9.375 12.5 9.375H10.625V7.5Z" fill="#404653" fillOpacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 1.04163C5.05229 1.04163 1.0415 5.05241 1.0415 9.99996C1.0415 14.9475 5.05229 18.9583 9.99984 18.9583C14.9474 18.9583 18.9582 14.9475 18.9582 9.99996C18.9582 5.05241 14.9474 1.04163 9.99984 1.04163ZM2.2915 9.99996C2.2915 5.74277 5.74265 2.29163 9.99984 2.29163C14.257 2.29163 17.7082 5.74277 17.7082 9.99996C17.7082 14.2571 14.257 17.7083 9.99984 17.7083C5.74265 17.7083 2.2915 14.2571 2.2915 9.99996Z" fill="#404653" fillOpacity="0.9"/>
                </svg>
                <p className='text-coregray font-poppins text-sm'>Add Certification / License</p>

            </div>
            <button
                    className="bg-corered hover:bg-black/5 text-sm text-white font-opensans mx-auto py-3 w-full mt-10"
                    type="submit"
                >
                     Next
                </button>
        </div>
    );
};

export default Certification