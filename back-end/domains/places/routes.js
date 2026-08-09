import { Router } from "express";
import Place from "./model.js";
import { jwtVerify } from "../../utils/jwt.js";
import { conectDB } from "../../config/db.js";
import { downloadImage } from "../../utils/imgDownloader.js";
import { __dirname } from "../../server.js";
const router = Router();

router.post("/", async (req, res) => {
  conectDB();
  const {
  
    title,
    photo,
    adress,
    description,
    price,
    perks,
    checkin,
    extras,
    checkout,
    guest,
  } = req.body;
  try {
    const{_id: owner}= await  jwtVerify(req);
    const newPlaceDoc = await Place.create({
      owner,
      title,
      photo,
      adress,
      description,
      perks,
      price,
      checkin,
      extras,
      checkout,
      guest,
    });
    res.json(newPlaceDoc)
  } catch (error) {
    console.error(error);
    res.status(500).json("deu erro ao criar novo lugar");
  }
});
router.post("/upload/link", async(req, res) => {
  const {link} = req.body;
  try {
    const filename =  await downloadImage(link, `${__dirname}/tmp/`)
     res.json(filename)

  } catch (error) {
    console.error(error)
    res.status(500).json("deu erro ao enviar imagem")
  }
})

export default router;
