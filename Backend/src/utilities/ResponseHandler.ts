import { Response } from "express";

type TApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  redirect?: string | null;
  data?: T | null;
};

const ResponseHandler = <T>(res: Response, data: TApiResponse<T>): void => {
  const responseData: TApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    redirect: data.redirect,
    data: data.data,
  };
  res.status(data.statusCode).json(responseData);
};

export default ResponseHandler;
