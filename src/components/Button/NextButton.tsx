import React from 'react';

interface ButtonProps {
    setCurrentTab: Function
    setCurrentIndex: Function
    currentTab: number
    currentIndex: number
    name: string
}

const NextButton = ({
    setCurrentTab,
    setCurrentIndex,
    currentIndex,
    currentTab,
    name }: ButtonProps) => {
    return (
        <div className='flex justify-end'>
            <div onClick={() => {
                setCurrentTab(currentTab + 1)
                setCurrentIndex(currentIndex + 1)
            }} className='text-corered cursor-pointer mt-7 text-sm font-poppins'>{name}</div>
        </div>
    );
};

export default NextButton