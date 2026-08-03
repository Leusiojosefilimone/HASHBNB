import express from "express";
import "dotenv/config";
import userRoutes from"./domains/users/routes.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}));

const { PORT } = process.env;
app.use("/users", userRoutes)


app.listen(PORT, () => {
  console.log(`A sevidor rodando na porta ${PORT}`);
});
