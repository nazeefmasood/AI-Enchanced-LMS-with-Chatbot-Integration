import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);
app.listen(3010, () => {
  console.log("The Backend is Running");
});
