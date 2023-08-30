import { StatusCodes } from "http-status-codes";
import fetch from "node-fetch";
import { response } from "../utils/response.js";
import bkashConfig from "../config/bkashConfig.js";
import { tokenHeaders } from "../utils/tokenHeaders.js";
import { setGlobalIdToken } from "../utils/globalData.js";

export const grantToken = async (req, res, next) => {
  console.log("Grant Token API Start !!");
  try {
    const tokenResponse = await fetch(bkashConfig.grant_token_url, {
      method: "POST",
      headers: tokenHeaders(),
      body: JSON.stringify({
        app_key: bkashConfig.app_key,
        app_secret: bkashConfig.app_secret,
      }),
    });
    const tokenResult = await tokenResponse.json();
    // console.log( "🚀 tokenResult:", tokenResult );
    setGlobalIdToken(tokenResult?.id_token);

    next();
  } catch (e) {
    return response(
      res,
      StatusCodes.UNAUTHORIZED,
      false,
      {},
      "You are not allowed"
    );
  }
};
