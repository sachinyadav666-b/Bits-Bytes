import express from "express";
import { uploadImage, deleteImage } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload", uploadImage);
router.post("/delete", deleteImage);

export default router;
