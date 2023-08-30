import httpStatus from "http-status";
import Config from "../Config";
import ApiError from "../Errors/ApiError";
import AsyncHandler from "./AsyncHandler";
import { setGlobalIdToken } from "./GlobalToken";
import ResponseHandler from "./ResponseHandler";

const GetToken = AsyncHandler(async (req, res, next) => {
    const tokenResponse = await fetch(Config.GRANT_URL as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: Config.APP_KEY as string,
            "x-app-key": Config.APP_KEY as string,
        },
        body: JSON.stringify({
            app_key: Config.APP_KEY,
            app_secret: Config.APP_SECRET,
        }),
    });
    const tokenResult = await tokenResponse.json();
    // console.log( "🚀 tokenResult:", tokenResult );
    setGlobalIdToken(tokenResult?.id_token);
    if (!tokenResult) {
        throw new ApiError(false, httpStatus.NOT_FOUND, "Token not found");
    }
    
    ResponseHandler(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Token found",
        data: tokenResult?.id_token,
    });
});
