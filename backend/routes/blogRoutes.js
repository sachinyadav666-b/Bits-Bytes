import express from "express";
import upload from "../middleware/upload.js";
import {
  createBlog,
  getBlogs,
  getBlogBySlug, // 🔥 Name change
  updateBlog,
  deleteBlog
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/create", upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug); // 🔥 Route change: /api/blogs/my-blog-title
router.put("/:id", upload.single("image"), updateBlog); // Update ke liye ID hi rakhte hain internal use ke liye
router.delete("/:id", deleteBlog); // Delete ke liye bhi ID hi theek hai

export default router;