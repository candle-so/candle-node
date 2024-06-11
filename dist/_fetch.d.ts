interface iFetch {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    url: string;
    data?: any;
    apiKey: string;
}
export declare const fetchWrapper: ({ method, url, data, apiKey }: iFetch) => Promise<any>;
export {};
