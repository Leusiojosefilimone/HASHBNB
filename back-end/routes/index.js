import { Router } from "express";
import userRoutes from "../domains/users/routes.js";
import placeRoutes from "../domains/places/routes.js";

const router = Router()

//routes
router.use("/users", userRoutes);
router.use("/places", placeRoutes);

export default router