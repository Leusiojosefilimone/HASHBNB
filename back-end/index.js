import express from "express";
import "dotenv/config";
import userRoutes from"./domains/users/routes.js"

const app = express();
app.use(express.json());
const { PORT } = process.env;
app.use("/users", userRoutes)


app.listen(PORT, () => {
  console.log(`A sevidor rodando na porta ${PORT}`);
});
