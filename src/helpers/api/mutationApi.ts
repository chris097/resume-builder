import toast from "react-hot-toast";
import { getAuthUser } from ".";

const token:string = getAuthUser();

export const mutationApi = async (url: string, method: string, payload: object) => {
    
    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
    });

    const request = new Request(url, {
        method: method,
        headers,
        body: JSON.stringify(payload),
    });

    try {
        const response = await fetch(request);
        const data = response.json();
        return data;
    } catch (error:any) {
        toast.error(error.message);
    }
};