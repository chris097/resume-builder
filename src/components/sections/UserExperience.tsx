import React, { useState } from 'react';
import Input from '../input';
import { useFormik } from 'formik';
import { createUserExperience } from '../../service';
import toast from 'react-hot-toast';
import { CONSTANT_TEXT } from '../../constant';
import { apiUrls } from '../../helpers/api/url';
import useQueryApi from '../../helpers/useQuery';
import ExperienceOne from './UserExperience/ExperienceOne';
import ExperienceTwo from './UserExperience/ExperienceTwo';
import NextButton from '../Button/NextButton';

interface FormikProps {
    job_title: string
    company: string
    country: string
    description: string
    start_date: string
    end_date: string
    start_month: string
    end_month: string
    start_year: string
    end_year: string
};

const months: { id: number, month: string }[] = [
    { id: 1, month: "January" },
    { id: 2, month: "Feburary" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" },
];

const years: { id: number, year: string }[] = [
    { id: 1, year: "2023" },
    { id: 2, year: "2022" },
    { id: 3, year: "2021" },
    { id: 4, year: "2020" },
    { id: 5, year: "2019" },
    { id: 6, year: "2018" },
    { id: 7, year: "2017" },
    { id: 8, year: "2016" },
    { id: 9, year: "2017" },
    { id: 10, year: "2016" },
    { id: 11, year: "2015" },
    { id: 12, year: "2014" },
];



const UserExperience = ({
    setCurrentIndex,
    setCurrentTab,
    currentIndex,
    currentTab
}: {setCurrentIndex: Function, setCurrentTab: Function, currentIndex: number, currentTab: number}) => {

    const [isLoading, setLoading] = useState<boolean>(false);

    const { data } = useQueryApi(CONSTANT_TEXT.GET_USER_EXPERIENCE, apiUrls.USER_EXPERIENCE_URL);

    const id = data?.data[0]?._id;
    const ids = data?.data[1]?._id

    return (
        <div>
            <ExperienceOne
                data={data}
                months={months}
                years={years}
                isLoading={isLoading}
                setLoading={setLoading}
                id={id}
            />
            <ExperienceTwo
                data={data}
                months={months}
                years={years}
                isLoading={isLoading}
                setLoading={setLoading}
                id={ids}
            />
            <p className='mb-28'>
                <NextButton
                    setCurrentIndex={setCurrentIndex}
                    setCurrentTab={setCurrentTab}
                    currentIndex={currentIndex}
                    currentTab={currentTab}
                    name='Next'
                />
            </p>
        </div>
    );
};

export default UserExperience;