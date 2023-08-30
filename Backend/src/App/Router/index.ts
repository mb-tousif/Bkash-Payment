import express from 'express';
import { BkashPayment } from '../Modules/bkash.payment';
import GetToken from '../../utilities/GetToken';

const router = express.Router();
router.use(GetToken)
router.post("/create", BkashPayment.executePayment);
router.get("/callback", BkashPayment.getPayment);

export default router;