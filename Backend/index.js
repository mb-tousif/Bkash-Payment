import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/bkashPayment.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes

app.use("/api/bkash", router);

app.get("/", (req, res) => {
  try {
    res.send("<h1>Welcome to Bkash Payment Gateway 🚀</h1>");
  } catch (e) {
    console.log(e);
  }
});

//Server setup
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
