import Blog from "../models/Blog.js";
import cloudinary from "../config/cloudinary.js";

// slug helper
const createSlug = title =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

// CREATE

// console.log("FILE:", req.file);
// console.log("BODY:", req.body);

export const createBlog = async (req, res) => {
  try {
    const { title, category, content, tags, status, image } = req.body;

    console.log("BODY:", req.body);

    if (!title || !category  ) {
      return res.status(400).json({ message: "Title, category and content are required" });
    }

    const slug = createSlug(title);

    const exists = await Blog.findOne({ slug });
    if (exists) {
      return res.status(400).json({ message: "Blog title already exists" });
    }

    let imageUrl = "";
    let imagePublicId = "";

    console.log("IMAGE:", image);

    if (image && image.startsWith("data:image")) {
      const upload = await cloudinary.uploader.upload(image, {
        folder: "blogs",
      });

      imageUrl = upload.secure_url;
      imagePublicId = upload.public_id;
    }

    const blog = await Blog.create({
      title,
      slug,
      category,
      content,
      tags: tags ? tags.split(",").map(t => t.trim()) : [],
      status,
      image: imageUrl,
      imagePublicId,
    });

    res.status(201).json(blog);

  } catch (err) {
    console.error("CREATE BLOG ERROR:", err);
    res.status(500).json({ message: "Create failed" });
  }
};


// GET ALL
export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

// GET BY SLUG
export const getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) return res.status(404).json({ message: "Not found" });
  res.json(blog);
};

// UPDATE
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Not found" });

    const { title, category, content, tags, status, image } = req.body;

    if (title) {
      blog.title = title;
      blog.slug = createSlug(title);
    }

    if (image) {
      if (blog.imagePublicId) {
        await cloudinary.uploader.destroy(blog.imagePublicId);
      }
      const upload = await cloudinary.uploader.upload(image, {
        folder: "blogs",
      });
      blog.image = upload.secure_url;
      blog.imagePublicId = upload.public_id;
    }

    blog.category = category;
    blog.content = content;
    blog.status = status;
    blog.tags = tags?.split(",").map(t => t.trim());

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

// DELETE
export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json(false);

  if (blog.imagePublicId) {
    await cloudinary.uploader.destroy(blog.imagePublicId);
  }

  await blog.deleteOne();
  res.json(true);
};
