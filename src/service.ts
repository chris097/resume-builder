import { mutationApi } from "./helpers/api/mutationApi";
import { apiUrls } from "./helpers/api/url";

const { REACT_APP_BACKEND_URL } = process.env;

export const fetchProfessionalSummary = (payload: object) => {
    const professionSummary = `${REACT_APP_BACKEND_URL}/${apiUrls.USER_INFO}`
    return mutationApi(professionSummary, apiUrls.POST, payload)
};

export const fetchWorkHistory = (payload: object) => {
    const workHistory = `${REACT_APP_BACKEND_URL}/${apiUrls.WORK_HISTORY}`;
    return mutationApi(workHistory, apiUrls.POST, payload)
};

export const createTechnicalSkill = (payload: object) => {
    const technicalSkill = `${REACT_APP_BACKEND_URL}/${apiUrls.TECHNICAL_SKILL}`;
    return mutationApi(technicalSkill, apiUrls.POST, payload)
};

export const createEducation = (payload: object) => {
    const education = `${REACT_APP_BACKEND_URL}/${apiUrls.EDUCATION_URL}`;
    return mutationApi(education, apiUrls.POST, payload);
};