import React, { ReactNode } from "react";
import toast from "react-hot-toast";
import { removeAuthUser } from "../helpers/api";
import { mutationApi } from "../helpers/api/mutationApi";
import { apiUrls } from "../helpers/api/url";
import { ROUTE_URL } from "../routes/url";

type AuthProps = {
    register: Function;
    login: Function;
    logout: Function;
};

type Props = {
    children?: ReactNode;
};

const defaultState = {
    register: () => { },
    login: () => { },
    logout: () => { },
};

const { REACT_APP_BACKEND_URL } = process.env;

export const authContext = React.createContext<AuthProps>(defaultState);

export const useAuth = () => React.useContext(authContext);

export const AuthProvider = ({ children }: Props) => {

    const register = (
        payload: string[] | {},
        responses: [],
        err: any
    ) => {
        const registerUrl = `${REACT_APP_BACKEND_URL}/${apiUrls.REGISTER_URL}`;
        return mutationApi(registerUrl, apiUrls.POST, payload, responses, err);
    };

    const login = (
        payload: any,
        responses: any,
        err: any
    ) => {
        const registerUrl = `${REACT_APP_BACKEND_URL}/${apiUrls.LOGIN_URL}`;
        return mutationApi(registerUrl, apiUrls.POST, payload, responses, err);
    };

    const logout = (navigate:any) => {
        removeAuthUser()
        navigate(ROUTE_URL.HOME_URL)
        toast.success("Logged out successfully!")
    }

    const values = {
        register,
        login,
        logout
    }

    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};