import Config from "../Config";
import bkashConfig from "../Constant";

const TokenHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    username: bkashConfig.username,
    password: bkashConfig.password,
  };
};

export default TokenHeaders;