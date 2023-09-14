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
export const createUserExperience = (payload: object) => {
    const professionSummary = `${REACT_APP_BACKEND_URL}/${apiUrls.USER_EXPERIENCE_URL}`
    return mutationApi(professionSummary, apiUrls.POST, payload)
};
export const updateUserExperience = (payload: object, id:string) => {
    const professionSummary = `${REACT_APP_BACKEND_URL}/${apiUrls.USER_EXPERIENCE_URL_ID(id)}`
    return mutationApi(professionSummary, apiUrls.PATCH, payload)
};
export const verifyOtp = (payload: object) => {
    const veriftOtpUrl = `${REACT_APP_BACKEND_URL}/${apiUrls.VERIFY_OTP}`;
    return mutationApi(veriftOtpUrl, apiUrls.POST, payload);
};
export const forgotPassword = (payload: object) => {
    const forgotPasswordUrl = `${REACT_APP_BACKEND_URL}/${apiUrls.FORGOT_PASSWORD_URL}`;
    return mutationApi(forgotPasswordUrl, apiUrls.POST, payload);
}
export const resetPassword = (payload: object, id:any, token: any) => {
    const forgotPasswordUrl = `${REACT_APP_BACKEND_URL}/${apiUrls.RESET_PASSWORD(id, token)}`;
    return mutationApi(forgotPasswordUrl, apiUrls.POST, payload);
}


