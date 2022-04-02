import express from "express";
import { defaultSmartHomeService } from "./services";
import { env } from "./utils/env";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/hi", (req, res) => {
  res.send("hi");
});

app.get("/devices", (req, res) => {
  const list = defaultSmartHomeService.getDeviceList();
  res.send(list);
});

app.get("/devices/:name", (req, res) => {
  const name = req.params.name;
  const info = defaultSmartHomeService.getDeviceInfo(name);
  res.send(info);
});

app.listen(env.SERVER_PORT, () => {
  console.log("Server is running~!!!!!");
});
