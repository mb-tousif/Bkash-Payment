import { ErrorRequestHandler } from "express";
import Config from "../Config";
import { IGenericErrorMessage } from "./error.interfaces";
import httpStatus from "http-status";

const GlobalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  Config.env === "development"
    ? console.log(error)
    : console.log(`🚀 Error Name: ${error.name}`);
  let success: boolean,
    statusCode: number,
    message: string,
    errorMessages: IGenericErrorMessage[] = [];
  if (error.name === "ApiError") {
    success = error.success;
    message = error.message;
    statusCode = error.statusCode;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    success = false;
    statusCode = httpStatus.NOT_FOUND;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }
  res.status(httpStatus.BAD_REQUEST).json({
    success: false,
    message: error.message,
    errorMessages,
    stack: Config.env !== "production" ? error?.stack : undefined,
  });
};

export default GlobalErrorHandler;
