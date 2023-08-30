import Config from "../Config";
import { getGlobalIdToken } from "./GlobalToken";

export type TAuthHeaderResponse = {
    "Content-Type": string;
    Accept: string;
    authorization: string | null;
    "x-app-key": string
};

const AuthHeaders = async (): Promise<TAuthHeaderResponse> => {
  let info = await getGlobalIdToken();
  // console.log("🚀 info:", info);

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: info,
    "x-app-key": Config.APP_KEY as string,
  };
};

export default AuthHeaders;