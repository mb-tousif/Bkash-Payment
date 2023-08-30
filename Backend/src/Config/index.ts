import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  GRANT_URL: process.env.grant_token_url,
  REFRESH_TOKEN_URL: process.env.refresh_token_url,
  CREATE_PAYMENT_URL: process.env.create_payment_url,
  EXECUTE_PAYMENT_URL: process.env.execute_payment_url,
  BACKEND_CALLBACK_URL: process.env.backend_callback_url,
  FRONTEND_SUCCESS_URL: process.env.frontend_success_url,
  FRONTEND_FAIL_URL: process.env.frontend_fail_url,
  USERNAME: process.env.username,
  PASSWORD: process.env.password,
  APP_KEY: process.env.app_key,
  APP_SECRET: process.env.app_secret,
};
