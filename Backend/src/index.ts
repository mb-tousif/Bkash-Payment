import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./App/Router";
import Config from "./Config";
import GlobalErrorHandler from "./Errors/GlobalHandler";

dotenv.config();
const app: Application = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(GlobalErrorHandler)

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:#753a88'>Welcome to<span style='color: red'>Bkash Payment </span> Gateway 🚀</h1>"
  );
});

app.use("/api/v1", router);

app.listen(Config.port, () => {
  console.log(`Server running on port: ${Config.port} 🚀`);
});
