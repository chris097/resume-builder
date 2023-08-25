import { getAuthUser } from ".";

export const fetchApi = async(url: string) => {
    const token = getAuthUser();

    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
    });

    const request = new Request(url, {
        headers,
    });
    
    try {
        const responses = await fetch(request);
        return responses;
    } catch (error) {
        console.log(error)
    }
}