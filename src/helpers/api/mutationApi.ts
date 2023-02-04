import { getAuthUser } from ".";

const token:string = getAuthUser();

export const mutationApi = (
    url: string,
    method: string,
    // token: string,
    payload: object,
    responses: any,
    err: any
) => {
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
    })
    
    fetch(request)
        .then((responses) => responses.json())
        .then(responses)
        .catch(err)
};