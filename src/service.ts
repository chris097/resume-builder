import { mutationApi } from "./helpers/api/mutationApi";
import { apiUrls } from "./helpers/api/url";

const { REACT_APP_BACKEND_URL } = process.env;

export const createUserInfo = (payload: object) => {
    const professionSummary = `${REACT_APP_BACKEND_URL}/${apiUrls.USER_INFO}`
    return mutationApi(professionSummary, apiUrls.POST, payload)
};
export const updateUserInfo = (payload: object, id:string) => {
    const professionSummary = `${REACT_APP_BACKEND_URL}/${apiUrls.USER_INFO_ID(id)}`
    return mutationApi(professionSummary, apiUrls.PATCH, payload)
};


