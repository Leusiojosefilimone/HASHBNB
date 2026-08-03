import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const bcryptsalt = bcrypt.genSaltSync();
const router = Router();
const { JWT_SECRET_KEY } = process.env;

router.get("/profile", async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, JWT_SECRET_KEY, {}, (err, userInfo) => {
      if (err) throw err;
      res.json(userInfo);
    });
  } else {
    res.json(null);
  }
});

router.get("/", async (req, res) => {
  connectDB();
  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

router.post("/register", async (req, res) => {
  connectDB();
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
    jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json(newUserObj);
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
});

router.post("/login", async (req, res) => {
  connectDB();
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });
    console.log(userDoc);
    const { name, _id } = userDoc;

    if (userDoc) {
      const correctPassword = bcrypt.compareSync(password, userDoc.password);

      if (correctPassword) {
        const newUserObj = { name, email, _id };

        jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (error, token) => {
          if (error) {
            console.error(error);
            res.status(400).json("deu erro");
            return;
          }
           res.cookie("token", token).json(newUserObj);
        });
        
       
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
