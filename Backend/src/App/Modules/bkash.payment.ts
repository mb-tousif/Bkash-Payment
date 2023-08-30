import { randomUUID } from "crypto";
import Config from "../../Config";
import AsyncHandler from "../../utilities/AsyncHandler";
import AuthHeaders from "../../utilities/AuthHeader";
import ApiError from "../../Errors/ApiError";
import httpStatus from "http-status";
import ResponseHandler from "../../utilities/ResponseHandler";

const executePayment = AsyncHandler(async (req, res, next) => {
  const { amount } = req.body;
  const result: any = await fetch(Config.CREATE_PAYMENT_URL as string, {
    method: "POST",
    headers: (await AuthHeaders()) as any,
    body: JSON.stringify({
      amount: amount ? amount : "1",
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: "Inv" + randomUUID(),
      callbackURL: `${Config.BACKEND_CALLBACK_URL}`,
    }),
  });
  if (!result) {
    throw new ApiError(false, httpStatus.NOT_FOUND, "Token not found");
  }
  const data = await result.json();
  ResponseHandler(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment executed successfully",
    data: data,
  });
});

const getPayment = AsyncHandler(async (req, res, next) => {
  if (req.query.status === "success") {
    const { paymentID } = req.query;
    const executeResponse = await fetch(Config.EXECUTE_PAYMENT_URL as string, {
      method: "POST",
      headers: (await AuthHeaders()) as any,
      body: JSON.stringify({
        paymentID,
      }),
    });
    const result: any = await executeResponse.json();
    console.log("🚀 result:", result);
    // save response in your db

    // Your frontend success route
    ResponseHandler(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Payment executed successfully",
      redirect: `${Config.FRONTEND_SUCCESS_URL}?data=${result.statusMessage}`,
      data: result,
    });
  } else {
    console.log("Payment Failed !!!");
    return res.redirect(Config.FRONTEND_FAIL_URL as string);
  }
  next();
});

export const BkashPayment = {
  executePayment,
  getPayment,
};
