import Config from "../Config";

const TokenHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    username: Config.USERNAME,
    password: Config.PASSWORD
  };
};

export default TokenHeaders;