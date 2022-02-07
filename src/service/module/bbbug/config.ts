const DEV_BASE_URL = "https://api.bbbug.com/api/";
const PRO_BASE_URL = "https://api.bbbug.com/api/";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? DEV_BASE_URL : PRO_BASE_URL;
export const TIMEOUT = 10000;

export const origin = "bbbug";
