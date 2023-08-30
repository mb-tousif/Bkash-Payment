import { getGlobalIdToken } from "./globalData.js";
import bkashConfig from "../config/bkashConfig.js";

export const authHeaders = async () => {
  let info = await getGlobalIdToken();
  // console.log("🚀 info:", info);

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: info,
    "x-app-key": bkashConfig.app_key,
  };
};
