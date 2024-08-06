import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  encoding: "utf-8",
  path: path.join(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});
