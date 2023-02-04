type API = {
    PUT: string
    POST: string
    PATCH: string
    USER_INFO: string
    WORK_HISTORY: string
    TECHNICAL_SKILL: string
    LOGIN_URL: string
    REGISTER_URL: string
}

export const apiUrls:API = {
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    USER_INFO: 'user/info',
    WORK_HISTORY: 'user/work-history',
    TECHNICAL_SKILL: 'user/skill',
    LOGIN_URL: 'auth/login',
    REGISTER_URL: 'auth/register'
}