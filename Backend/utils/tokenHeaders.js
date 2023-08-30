import bkashConfig from "../config/bkashConfig.js";

export const tokenHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    username: bkashConfig.username,
    password: bkashConfig.password,
  };
};

