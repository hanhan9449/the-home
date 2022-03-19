import express from "express";
import { client } from "./mqtt";
import { defaultSmartHomeService } from "./services";
import { env } from "./utils/env";

const app = express();

app.get("/hi", (req, res) => {
  res.send("hi");
});

app.get("/devices/list", (req, res) => {
  const list = defaultSmartHomeService.getDeviceList();
  res.send(list);
});

app.get("/device/:name", (req, res) => {
  const name = req.params.name;
  const info = defaultSmartHomeService.getDeviceInfo(name);
  res.send(info);
});

app.listen(env.SERVER_PORT, () => {
  console.log("Server is running~!!!!!");
});
