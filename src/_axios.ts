/// <reference types="node" />

import axios from "axios";

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

export const axiosWrapper = async ({ url, method = "GET", data = {}, apiKey }: iAxios): Promise<iAxiosResponse> => {
  const CANDLE_API_URL = process.env.CANDLE_API_URL || "https://api.candle.so";

  if (!url) throw new Error("url is not set");
  if (!apiKey) throw new Error("apiKey is not set");
  const KEY_SPLIT = apiKey.split("_");
  if (KEY_SPLIT.length !== 3) throw new Error("apiKey is not valid");

  const MODE = KEY_SPLIT[1];
  const _url = `${CANDLE_API_URL}/v1/${url}`;
  const headers = {
    api_key: apiKey,
    "Content-Type": "application/json",
    mode: MODE,
  };

  try {
    let results: any = {};

    if (method === "GET") {
      const response = await axios.get(_url, { headers });
      results = { status: response.status, data: response.data };
    }
    if (method === "POST") {
      const response = await axios.post(_url, data, { headers });
      results = { status: response.status, data: response.data };
    }
    if (method === "PUT") {
      const response = await axios.put(_url, data, { headers });
      results = { status: response.status, data: response.data };
    }
    if (method === "DELETE") {
      const response = await axios.delete(_url, { headers });
      results = { status: response.status, data: response.data };
    }
    return results;
  } catch (error: any) {
    return { status: error.response.status, error: error.response.data };
  }
};
