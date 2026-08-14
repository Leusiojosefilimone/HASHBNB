import { Router } from "express";
import Booking from "./model.js";
import { conectDB } from "../../config/db.js";
import { __dirname } from "../../server.js";
import { jwtVerify } from "../../utils/jwt.js";

const router = Router();
router.post("/", async(req, res) => {
  conectDB()
  const { place, user, price, totalprice, checkin, checkout, guest, nights } =
    req.body;

 try {
     const bookingObj = await Booking.create({
    place,
    user,
    price,
    totalprice,
    checkin,
    checkout,
    guest,
    nights,
  });
  res.json(bookingObj)
 } catch (error) {
    console.error(error)
    res.status(500).json("erro ao reservar")
 }
});
router.get("/", async (req, res) => {
  conectDB();
  try {
    const { _id: id} = await jwtVerify(req)

      try {
    const bookingsDoc = await Booking.find({user: id}).populate('place')    
    res.json(bookingsDoc);

  } catch (error) {

    console.error(error);
    res.status(500).json("deu erro ao actualizar o novo lugar");

  }
  } catch (error) {
    console.error(error)
    res.json("deu error ao encontrar o usuario")
  }
 
})

export default router;
