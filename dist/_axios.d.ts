export interface iAxios {
    url: string;
    method?: "UPLOAD" | "GET" | "POST" | "PUT" | "DELETE";
    data?: any;
    file?: any;
    apiKey: string;
    accessToken?: string;
    debug?: boolean;
}
export interface iAxiosResponse {
    status: number;
    data?: any;
    error?: any;
}
export declare const axiosWrapper: ({ url, method, data, file, apiKey, accessToken, debug }: iAxios) => Promise<iAxiosResponse>;
