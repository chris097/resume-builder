import { CONSTANT_TEXT } from "../../constant";

export const getAuthUser = () => {
    const user:any = localStorage.getItem(CONSTANT_TEXT.APP_AUTH_TOKEN);
	return JSON.parse(user);
};
export const setAuthUser = (user:string) => {
	localStorage.setItem(CONSTANT_TEXT.APP_AUTH_TOKEN, JSON.stringify(user));
};
export const removeAuthUser = () => {
	localStorage.removeItem(CONSTANT_TEXT.APP_AUTH_TOKEN);
};