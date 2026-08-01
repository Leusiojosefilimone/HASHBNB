import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const bcryptsalt = bcrypt.genSaltSync();
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
  console.log(req.body);
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

router.post("/login", async (req, res) => {
  connectDB();
  const { email, password } = req.body;
  
  try {
    const userDoc = await User.findOne({email});
    console.log(userDoc)
    const { name, _id } = userDoc;

    if (userDoc) {
      const correctPassword = bcrypt.compareSync(password, userDoc.password);
      correctPassword ? res.json({ name, _id }) : res.json("senha invalida!");
    } else {
      res.json(400).json("usuario nao encontrado");
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuario" });
  }
});

export default router;
