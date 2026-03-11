import React, { useEffect, useMemo, useState } from "react";
import { Calendar, ArrowRight, Search, Zap, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";

const Blogs = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetch(`${API_URL}/api/blogs`)
      .then(r => r.json())
      .then(d => setPosts(Array.isArray(d) ? d : []))
      .catch(() => setPosts([]));
  }, []);

  useEffect(() => { setCurrentPage(1); }, [search, selectedCategory]);

  const categories = useMemo(() => ["All", ...new Set(posts.map(p => p.category))], [posts]);

  const filtered = useMemo(() => {
    let list = posts;
    if (search) list = list.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    if (selectedCategory !== "All") list = list.filter(p => p.category === selectedCategory);
    return list;
  }, [posts, search, selectedCategory]);

  const currentPosts = filtered.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .blogs-root { font-family: 'DM Sans', sans-serif; background: #f8fafc; min-height: 100vh; }
        .blogs-root * { box-sizing: border-box; }
        .display { font-family: 'Syne', sans-serif; }
        .card { background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; cursor: pointer; transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.09); }
        .card:hover .card-arrow { transform: translateX(4px); }
        .card-arrow { transition: transform 0.2s ease; }
        .cat-btn { padding: 7px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; border: 1.5px solid #e2e8f0; cursor: pointer; transition: all 0.18s ease; background: #fff; color: #64748b; }
        .cat-btn.active, .cat-btn:hover { background: #0ea5e9; border-color: #0ea5e9; color: #fff; }
        .page-btn { width: 36px; height: 36px; border-radius: 8px; border: 1.5px solid #e2e8f0; font-size: 13px; font-weight: 700; cursor: pointer; background: #fff; color: #64748b; transition: all 0.15s; }
        .page-btn.active, .page-btn:hover { background: #0ea5e9; border-color: #0ea5e9; color: #fff; }
        .search-wrap { display: flex; align-items: center; gap: 8px; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 10px 16px; }
        .search-wrap:focus-within { border-color: #0ea5e9; }
        .search-wrap input { border: none; outline: none; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #0f172a; background: transparent; width: 200px; }
        .img-wrap { position: relative; height: 200px; overflow: hidden; background: #f1f5f9; }
        .img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .card:hover .img-wrap img { transform: scale(1.04); }
        .cat-tag { display: inline-block; background: #e0f2fe; color: #0369a1; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.3px; }
      `}</style>

      <div className="blogs-root">
        {/* Header */}
        <div style={{ background: '#0f172a', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
              <Zap size={13} style={{ color: '#38bdf8' }} />
              <span style={{ color: '#38bdf8', fontSize: 11, fontWeight: 700, letterSpacing: '1px' }}>LATEST ARTICLES</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
              <h1 className="display" style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, color: '#fff', lineHeight: 1.05, margin: 0 }}>
                Our <span style={{ color: '#38bdf8' }}>Blog</span>
              </h1>
              <div className="search-wrap">
                <Search size={15} style={{ color: '#94a3b8', flexShrink: 0 }} />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles…" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '36px 24px 64px' }}>
          {/* Category filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            {categories.map(c => (
              <button key={c} className={`cat-btn${selectedCategory === c ? ' active' : ''}`} onClick={() => setSelectedCategory(c)}>{c}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {currentPosts.map(post => (
              <article key={post._id} className="card" onClick={() => post.slug && navigate(`/blogs/${post.slug}`)}>
                <div className="img-wrap">
                  {post.image
                    ? <img src={post.image} alt={post.title} />
                    : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}><Tag size={28} style={{ color: '#cbd5e1' }} /></div>
                  }
                </div>
                <div style={{ padding: '20px 22px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span className="cat-tag">{post.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#94a3b8', fontSize: 12 }}>
                      <Calendar size={11} /> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="display" style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', marginBottom: 10, lineHeight: 1.35 }}>{post.title}</h3>
                  <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 16,
                    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    dangerouslySetInnerHTML={{ __html: post.content?.substring(0, 140) + '…' }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0ea5e9', fontWeight: 700, fontSize: 13 }}>
                    Read Article <ArrowRight size={14} className="card-arrow" />
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '64px 24px', color: '#94a3b8', background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0' }}>
                <Search size={32} style={{ margin: '0 auto 12px', opacity: 0.3 }} />
                <div style={{ fontWeight: 600, fontSize: 15 }}>No posts found</div>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button key={n} className={`page-btn${currentPage === n ? ' active' : ''}`} onClick={() => setCurrentPage(n)}>{n}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;