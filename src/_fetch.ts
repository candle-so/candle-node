interface iFetch {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: any;
  apiKey: string;
}

export const fetchWrapper = async ({ method = "GET", url, data = {}, apiKey }: iFetch) => {
  const CANDLE_API_URL = process.env.CANDLE_API_URL || "https://api.candle.so";

  if (!url) throw new Error("url is not set");
  if (!apiKey) throw new Error("apiKey is not set");
  const KEY_SPLIT = apiKey.split("_");
  if (KEY_SPLIT.length !== 3) throw new Error("apiKey is not valid");

  const MODE = KEY_SPLIT[1];

  const _url = `${CANDLE_API_URL}/v1/${url}`;
  const headers = {
    authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    mode: MODE,
  };

  let payload: any = { method, headers, body: JSON.stringify(data) };
  if (method === "GET") delete payload.body;

  const response = await fetch(_url, payload);

  if (response.status > 499) {
  }
  if (response.status < 300) {
    let result = await response.json();
    return result;
  }
  let error = await response.json();

  let errorMessages = error.message || `Error ${method}-ing /${url}`;
  return { message: errorMessages, status: response.status, error };
};
