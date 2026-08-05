import { Router } from "express";
import { conectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtSign, jwtVerify } from "../../utils/jwt.js";
import "dotenv/config";

const bcryptsalt = bcrypt.genSaltSync();
const router = Router();
//const { JWT_SECRET_KEY } = process.env;

router.get("/profile", async (req, res) => {
  const userInfo = await jwtVerify(req);
  res.json(userInfo);
});

router.get("/", async (req, res) => {
  conectDB();
  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

router.post("/register", async (req, res) => {
  conectDB();
  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptsalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const { _id } = newUserDoc;
    const newUserObj = { name, email, _id };
    try {
           const token = await jwtSign(newUserObj);
            res.cookie("token", token).json(newUserObj);
        } catch (error) {
         res.status(500).json("error ao asinar com JWT",error) 
        }
   
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário", error});
  }
});

router.post("/login", async (req, res) => {
  conectDB();
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });
    const { name, _id } = userDoc;

    if (userDoc) {
      const correctPassword = bcrypt.compareSync(password, userDoc.password);

      if (correctPassword) {
        const newUserObj = { name, email, _id };
        try {
           const token = await jwtSign(newUserObj);
            res.cookie("token", token).json(newUserObj);
        } catch (error) {
         res.status(500).json("error ao asinar com JWT",error) 
        }
      } else {
        res.json("senha invalida!");
      }

    } else {
      res.json(400).json("usuario nao encontrado");
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuario" });
  }
});
router.post("/logout", (req, res) => {
  res.clearCookie("token").json("Logout successful");
});

export default router;
