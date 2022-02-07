import service from "../service";
import { origin } from "../config";
import qs from "qs";
export const searchMuisc_BBBUG = (keyword: string) => {
  return service.request(
    {
      url: "/song/search",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        keyword,
        access_token: "123456",
        plat: "pc",
        version: 10000,
      }),
    },
    {
      origin,
    }
  );
};
