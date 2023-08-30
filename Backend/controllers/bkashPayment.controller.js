import { StatusCodes } from "http-status-codes";
import fetch from "node-fetch";
import { v4 as uuid } from "uuid";
import { response } from "../utils/response.js";
import bkashConfig from "../config/bkashConfig.js";
import { authHeaders } from "../utils/authHeader.js";


export const createPayment = async (req, res, next) => {
  try {
    const { amount } = req.body;
    const result = await fetch(bkashConfig.create_payment_url, {
      method: "POST",
      headers: await authHeaders(),
      body: JSON.stringify({
        mode: "0011",
        payerReference: " ",
        callbackURL: `${bkashConfig.backend_callback_url}`,
        amount: amount ? amount : "1",
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "Inv" + uuid(),
      }),
    });
    const data = await result.json();

    return response(res, StatusCodes.CREATED, true, { data }, "");
  } catch (error) {
    console.log( error );
    return response(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      false,
      {data: error},
      "Something went wrong"
    );
  }
};

export const bkashCallback = async (req, res) => {
  try {
    if (req.query.status === "success") {
      console.log("Execute Payment API Start !!!");
      const { paymentID } = req.query;
      const executeResponse = await fetch(bkashConfig.execute_payment_url, {
        method: "POST",
        headers: await authHeaders(),
        body: JSON.stringify({
          paymentID,
        }),
      });
      const result = await executeResponse.json();
      console.log( "🚀 result:", result );

      if (result.statusCode && result.statusCode === "0000") {
        console.log("Payment Successful !!! ");
        // save response in your db

        // Your frontend success route
        return res.redirect(
          `${bkashConfig.frontend_success_url}?data=${result.statusMessage}`
        );
      } else {
        console.log("Payment Failed !!!");
        return res.redirect(bkashConfig.frontend_fail_url);
      }
    }
  } catch (e) {
    console.log("Payment Failed !!!");

    return res.redirect(bkashConfig.frontend_fail_url);
  }
};

