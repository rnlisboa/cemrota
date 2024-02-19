import axios, { AxiosError, } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/authTokenError";


export function setupAPIClient(context =undefined){
    let cookies = parseCookies(context);
    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@cemrota.token']}`
        }
    })


    api.interceptors.response.use(response => {
        return response;
        },(error: AxiosError) => {
            if(error.response?.status === 401){
                //deslogar
                if(typeof window !== undefined){
                    //deslogar
                } else {
                    return Promise.reject( new AuthTokenError);
                }
            }

            return Promise.reject(error);
        })

    return api;
}