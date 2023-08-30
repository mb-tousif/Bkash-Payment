import express from "express";
import { createPayment, bkashCallback } from "../controllers/bkashPayment.controller.js";
import { grantToken } from "../utils/grantToken.js";

const router = express.Router();

router.use(grantToken);

router.post("/create", createPayment);

router.get("/callback", bkashCallback);

export default router;
