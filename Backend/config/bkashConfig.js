const bkashConfig = {
  grant_token_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
  refresh_token_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/refresh",
  create_payment_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
  execute_payment_url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
  backend_callback_url: "http://localhost:5000/api/bkash/callback",
  frontend_success_url: "http://localhost:3000/payment-success",
  frontend_fail_url: "http://localhost:3000/payment-fail",
  username: "sandboxTokenizedUser02",
  password: "sandboxTokenizedUser02@12345",
  app_key: "4f6o0cjiki2rfm34kfdadl1eqq",
  app_secret: "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b"
}

export default bkashConfig;
