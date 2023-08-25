interface ApiProps {
    PUT: string
    POST: string
    PATCH: string
    USER_INFO: string
    USER_INFO_ID: (id: string) => void,
    VERIFY_OTP: string,
    WORK_HISTORY: string
    TECHNICAL_SKILL: string
    LOGIN_URL: string
    REGISTER_URL: string
    EDUCATION_URL: string
    FORGOT_PASSWORD_URL: string
    RESET_PASSWORD: (id:string, token:string) => string;
}

export const apiUrls:ApiProps = {
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    USER_INFO: 'user/info',
    USER_INFO_ID: (id) => `user/info/${id}`,
    VERIFY_OTP: 'auth/verify-otp',
    WORK_HISTORY: 'user/work-history',
    TECHNICAL_SKILL: 'user/skill',
    LOGIN_URL: 'auth/login',
    REGISTER_URL: 'auth/register',
    EDUCATION_URL: 'user/education',
    FORGOT_PASSWORD_URL: 'auth/forgot-password',
    RESET_PASSWORD: (id, token) => `auth/reset-password/${id}/${token}`
}