import React, { useState } from 'react';
import Input from '../input';
import { GrStatusGood } from 'react-icons/gr';
import NextButton from '../Button/NextButton';
import { async } from 'q';
import { createUserTask, updateUserSkill } from '../../service';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import useQueryApi from '../../helpers/useQuery';
import { apiUrls } from '../../helpers/api/url';

const listData: string[] = ["Javascript", "CSS3", "React.JS", "Typescript", "HTML5", "TailwindCSS", "Node.JS", "Next.JS", "Python", "C++", "Java"]

const TechnicalSkill = ({
    setCurrentIndex,
    setCurrentTab,
    currentIndex,
    currentTab
}: { setCurrentIndex: Function, setCurrentTab: Function, currentIndex: number, currentTab: number }) => {

  const [clickedValues, setClickedValues] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { data } = useQueryApi('skill', apiUrls.TECHNICAL_SKILL);

  const id = data?.skills[0]?._id;

   // Sample list data

  const handleItemClick = (value:any) => {
    if (clickedValues.includes(value)) {
      // If the value is already in the clickedValues array, remove it
      setClickedValues(clickedValues.filter((v:any) => v !== value));
    } else {
      // If the value is not in the cckedValues array, add it
      setClickedValues([...clickedValues, value]);
    }
  };

  const handleClick = async () => {
    setLoading(true);
    const response = await createUserTask({
      name: clickedValues
    });
    if (response.status === 201) {
      toast.success(response.message);
      setLoading(false);
      queryClient.invalidateQueries({
        queryKey: ["skill"],
        exact: true
      })
      queryClient.invalidateQueries({
        queryKey: ["all"],
        exact: true
      })
    } else {
      setLoading(false);
      toast.error(response.message);
    }
  }

  const handleUpdateClick = async() => {
    setLoading(true);
    const response = await updateUserSkill({
      name: clickedValues
    }, id)
    if (response.status === 201) {
      toast.success(response.message);
      setLoading(false);
      queryClient.invalidateQueries({
        queryKey: ["skill"],
        exact: true
      })
      queryClient.invalidateQueries({
        queryKey: ["all"],
        exact: true
      })
    } else {
      toast.error(response.message);
      setLoading(false)
    }
  }

  return (
    <div>
      <div className='mt-7'>
        <div className='text-coregray text-sm font-normal'>Skill 1</div>
        <div className='grid grid-cols-3 text-xs gap-3 mt-7'>
          {listData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className={`${clickedValues.includes(item) ? "bg-corered/30" : ""} border cursor-pointer text-center py-2 rounded-full`}>
              {item}
            </div>
          ))}
        </div>
        <div>
        </div>
      </div>
      {!data?.skills[0]?.name?.length ? <button
        onClick={handleClick}
        className="bg-corered hover:bg-black/5 text-sm text-white font-opensans mx-auto py-3 w-full mt-10"
        type="submit"
      >
       {loading === true ? "Loading..." :  "Send"}
      </button> : <button onClick={handleUpdateClick} type='submit' className='bg-corered hover:bg-black/5 text-sm text-white font-opensans mx-auto py-3 w-full mt-10'>{loading ? "Loading..." : "Update"}</button>}
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