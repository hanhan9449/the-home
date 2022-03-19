import { config } from "dotenv-defaults";

// 环境变量注入入口
config();

export const env = {
  SERVER_PORT: process.env.SERVER_PORT,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  MQTT_BROKER_HOST: process.env.MQTT_BROKER_HOST,
};
