import express from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "node:path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(router);
app.use("/tmp", express.static(__dirname + "/tmp"));



