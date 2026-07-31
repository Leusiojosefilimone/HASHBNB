import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from 'bcryptjs';



const bcryptsalt = bcrypt.genSaltSync()
const router = Router();

router.get("/", async (req, res) => {
  connectDB();
  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

router.post("/", async (req, res) => {
    console.log(req.body)
  connectDB();
  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptsalt);
  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.status(200);
    res.json(newUserDoc);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuario" });
  }
});

export default router;
