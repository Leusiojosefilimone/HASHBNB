import { Router } from "express";
import Place from "./model.js";
import { jwtVerify } from "../../utils/jwt.js";
import { conectDB } from "../../config/db.js";
import { multerUpload, downloadImage, cloudinaryUpload } from "./controller.js";
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
    const { _id: owner } = await jwtVerify(req);
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
    res.json(newPlaceDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json("deu erro ao criar novo lugar");
  }
});

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;
  const folderPath = `${__dirname}/tmp/`;

  try {
    const filename = await downloadImage(link);
    const { url: imageUrl } = await cloudinaryUpload(filename);

    res.json(imageUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json("deu erro ao enviar imagem");
  }
});

router.post("/upload", multerUpload().array("files", 10), async (req, res) => {
  const { files } = req;
  
  const filesPromise = new Promise(async (resolve, reject) => {
    const fileURLArry = [];

    files.forEach(async (file, index) => {
      try {
         const fileURL = await cloudinaryUpload(file.filename);
          fileURLArry.push(fileURL);

          if (index === files.length - 1){
          resolve (fileURL)

          }
      } catch (error) {
        console.error("deu algun erro ao salvar a imagem no cloudinary ;",err);
          reject(err)
      }
    });
  });
  const fileURLArryResolved = await filesPromise;
  res.json(fileURLArryResolved)
});

export default router;
