import React from 'react';
import Input from '../input';
import { GrStatusGood } from 'react-icons/gr';
import NextButton from '../Button/NextButton';

const TechnicalSkill = ({
    setCurrentIndex,
    setCurrentTab,
    currentIndex,
    currentTab
}:{setCurrentIndex: Function, setCurrentTab: Function, currentIndex: number, currentTab: number}) => {
    return (
        <div>
            <div className='mt-7'>
                <label className='text-coregray text-sm font-normal'>Skill 1</label>
                <div className='w-full h-[42px] flex items-center bg-white border border-[#E4E7EB] px-1 pr-3 focus:outline-none bg-transparent text-basegray text-sm mt-1'>
                    <select className='w-full appearance-none h-full outline-none'>
                        <option>NextJs</option>
                        <option>NextJs</option>
                        <option>NextJs</option>
                    </select>
                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5893 12.2559C10.2638 12.5813 9.73617 12.5813 9.41075 12.2559L5.24408 8.08922C4.91864 7.76378 4.91864 7.23614 5.24408 6.9107C5.56952 6.58527 6.09715 6.58527 6.42259 6.9107L10 10.4881L13.5774 6.9107C13.9028 6.58527 14.4305 6.58527 14.7559 6.9107C15.0813 7.23614 15.0813 7.76378 14.7559 8.08922L10.5893 12.2559Z" fill="#666666" fillOpacity="0.5" />
                    </svg>
                    </span>
                </div>
            </div>
            <button
                    className="bg-corered hover:bg-black/5 text-sm text-white font-opensans mx-auto py-3 w-full mt-10"
                    type="submit"
                >
                     Send
            </button>
            <NextButton
                setCurrentIndex={setCurrentIndex}
                setCurrentTab={setCurrentTab}
                currentIndex={currentIndex}
                currentTab={currentTab}
                name='Next'
            />
        </div>
    );
};

export default TechnicalSkill;