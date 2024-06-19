export interface iAxios {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    data?: any;
    apiKey: string;
}
export interface iAxiosResponse {
    status: number;
    data?: any;
    error?: any;
}
export declare const axiosWrapper: ({ url, method, data, apiKey }: iAxios) => Promise<iAxiosResponse>;
