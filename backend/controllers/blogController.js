import Blog from "../models/Blog.js";

// Helper function to create slug
const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces with -
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing -
};

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const { title, category, content, tags, status } = req.body;

    // 1. Generate Slug from Title
    const slug = createSlug(title);

    // 2. Check for duplicate slug
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res.status(400).json({ message: "Blog with this title already exists." });
    }

    const newBlog = await Blog.create({
      title,
      slug, // Save slug to DB
      category,
      content,
      status,
      tags: tags?.split(",").map((t) => t.trim()),
      image: req.file?.path,  
    });

    return res.status(201).json(newBlog);
  } catch (error) {
    console.log("Create Blog Error:", error);
    res.status(500).json(null);
  }
};

// GET ALL BLOGS
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.json(blogs);
  } catch (err) {
    res.status(500).json([]);
  }
};

// GET SINGLE BLOG BY SLUG
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params; 
    const blog = await Blog.findOne({ slug: slug }); 

    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
    }
    return res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = req.file.path;

    if (data.title) {
        data.slug = createSlug(data.title);
    }

    const updated = await Blog.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    return res.json(updated);
  } catch (err) {
    res.status(500).json(null);
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    return res.json(true);
  } catch (err) {
    res.status(500).json(false);
  }
};