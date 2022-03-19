import { config } from "dotenv-defaults";

// 环境变量注入入口
config();

export const env = {
  PORT: process.env.PORT,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
};
