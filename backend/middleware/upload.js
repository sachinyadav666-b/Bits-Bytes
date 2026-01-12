import multer from "multer";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import pkg from "multer-storage-cloudinary";

dotenv.config();

const { v2: cloudinaryV2 } = cloudinary;

// ✅ FIX: constructor safely resolve karo
const CloudinaryStorage =
  pkg.CloudinaryStorage || pkg.default || pkg;

// Cloudinary Config
cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Storage Engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: "blog_images",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    resource_type: "image",
  },
});

const upload = multer({ storage });

export default upload;
