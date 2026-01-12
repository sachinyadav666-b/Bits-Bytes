import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // 🔥 Ye add kiya hai (URL ke liye)
    category: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    tags: [String],
    featured: { type: Boolean, default: false },
    author: { type: String, default: "Admin" },
    status: { type: String, default: "Published" }
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);