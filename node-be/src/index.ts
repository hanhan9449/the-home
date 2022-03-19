import express from "express";
import { env } from "./utils/env";

const app = express();

app.get("hi", (req, res) => {
  res.send("hi");
});

app.listen(env.PORT, () => {
  console.log("Server is running~!!!!!");
});
