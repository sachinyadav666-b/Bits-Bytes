import React, { useEffect, useMemo, useState } from "react";
import { Calendar, ArrowRight, Search, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ 1. Use HTTP for localhost (Fixes SSL Error)
// const API_URL = "http://localhost:5000"; 
const API_URL = 'https://bitsandbytesit.onrender.com';
const Blogs = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  // Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/api/blogs`);
        const data = await res.json();
        
        console.log("Fetched Data:", data); // Debugging

        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch (err) {
        console.error("Blog fetch error:", err);
        setPosts([]);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  const categories = useMemo(
    () => ["All", ...new Set(posts.map((p) => p.category))],
    [posts]
  );

  const filtered = useMemo(() => {
    let list = posts;
    if (search)
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    if (selectedCategory !== "All")
      list = list.filter((p) => p.category === selectedCategory);
    return list;
  }, [posts, search, selectedCategory]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  const paginate = (num) => setCurrentPage(num);

  // ✅ 2. Navigation function using SLUG
  const handleReadMore = (slug) => {
    if (!slug) {
        console.error("Slug is undefined for this post!");
        return;
    }
    navigate(`/blogs/${slug}`);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <header className="relative pt-28 px-6 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <span className="inline-flex gap-2 px-3 py-1.5 mb-4 border rounded-full bg-cyan-50 text-cyan-700 text-xs uppercase font-bold">
                <Zap size={14} /> Latest Blogs
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-3">
                Our <span className="text-cyan-600">Blogs</span>
              </h1>
            </div>

            <div className="bg-white border rounded-full flex items-center px-4 py-2 shadow-sm">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="bg-transparent outline-none text-slate-900 w-48"
              />
              <Search size={18} className="text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post._id}
                // ✅ 3. Passing SLUG to the handler
                onClick={() => handleReadMore(post.slug)} 
                className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover"
                    alt="thumb"
                  />
                </div>

                <div className="p-6 flex flex-col">
                  <div className="text-xs text-gray-500 mb-3 flex gap-3 font-medium">
                    <span className="text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {new Date(post.createdAt).toDateString()} 
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mb-3">{post.title}</h3>

                  <div
                    className="text-gray-600 text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: post.content ? post.content.substring(0, 120) + "..." : "",
                    }}
                  />

                  <button className="mt-4 text-cyan-600 font-bold text-sm flex gap-1">
                    Read Article <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-2 text-center py-10 text-gray-500 bg-gray-50 border rounded-xl">
                No blogs found.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex gap-2 bg-white border rounded-xl p-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      onClick={() => paginate(num)}
                      className={`px-4 py-2 rounded-lg font-bold text-sm ${
                        currentPage === num
                          ? "bg-cyan-600 text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {num}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-8">
          <div className="bg-white border p-6 rounded-xl shadow-sm">
            <h4 className="font-bold mb-4">Categories</h4>
            <div className="flex flex-col gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-4 py-2 rounded-lg text-left ${
                    selectedCategory === c
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-gray-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Blogs;