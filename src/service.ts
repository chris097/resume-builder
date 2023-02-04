import { mutationApi } from "./helpers/api/mutationApi";
import { apiUrls } from "./helpers/api/url";

const { REACT_APP_FRONTEND_URL } = process.env;

export const fetchProfessionalSummary = (payload: object, responses: any, err: any) => {
    const professionSummary = `${REACT_APP_FRONTEND_URL}/${apiUrls.USER_INFO}`
    return mutationApi(professionSummary, apiUrls.POST, payload, responses, err)
};

export const fetchWorkHistory = (payload: object, responses: any, err: any) => {
    const workHistory = `${REACT_APP_FRONTEND_URL}/${apiUrls.WORK_HISTORY}`;
    return mutationApi(workHistory, apiUrls.POST, payload, responses, err)
};

export const createTechnicalSkill = (payload: object, responses: any, err: any) => {
    const technicalSkill = `${REACT_APP_FRONTEND_URL}/${apiUrls.TECHNICAL_SKILL}`;
    return mutationApi(technicalSkill, apiUrls.POST, payload, responses, err)
}