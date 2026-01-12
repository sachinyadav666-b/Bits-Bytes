import React, { useEffect, useState, useRef } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  ChevronRight, 
  Home, 
  List, 
  Bookmark, 
  Share2, 
  Clock,
  Tag,
  Eye,
  BookOpen,
  Minus,
  Sparkles,
  ArrowUp
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = 'https://bitsandbytes-sb2k.onrender.com';

const BlogDetail = () => {
  const { slug } = useParams(); 
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [activeHeading, setActiveHeading] = useState("");
  const [headings, setHeadings] = useState([]);
  const [estimatedReadTime, setEstimatedReadTime] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        console.log("Fetching slug:", slug);
        const res = await fetch(`${API_URL}/api/blogs/${slug}`);
        
        if (!res.ok) throw new Error("Blog not found");
        
        const data = await res.json();
        setPost(data);
        
        // Calculate read time
        const wordsPerMinute = 200;
        const wordCount = data.content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / wordsPerMinute);
        setEstimatedReadTime(readTime);
      } catch (err) {
        console.error(err);
        setError("Blog not found");
      }
    };
    if (slug) {
      getDetail();
    }
  }, [slug]);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract headings from content after post is loaded
  useEffect(() => {
    if (!post) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3');
    
    const extractedHeadings = Array.from(headingElements).map((heading, index) => {
      if (!heading.id) {
        heading.id = `section-${index}`;
      }
      
      return {
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.charAt(1)),
      };
    });
    
    setHeadings(extractedHeadings);
    
    if (extractedHeadings.length === 0) {
      setHeadings([{ id: 'blog-start', text: 'Blog Overview', level: 2 }]);
    }
  }, [post]);

  // Intersection observer for active headings
  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id);
        }
      });
    }, observerOptions);

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveHeading(id);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: `Check out this blog: ${post.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('blogBookmarks') || '[]');
    const isBookmarked = bookmarks.some(b => b.id === post._id);
    
    if (isBookmarked) {
      const updated = bookmarks.filter(b => b.id !== post._id);
      localStorage.setItem('blogBookmarks', JSON.stringify(updated));
      alert('Removed from bookmarks');
    } else {
      bookmarks.push({
        id: post._id,
        title: post.title,
        slug: post.slug,
        image: post.image,
        date: post.createdAt
      });
      localStorage.setItem('blogBookmarks', JSON.stringify(bookmarks));
      alert('Added to bookmarks');
    }
  };

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center p-8">
        <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <Minus className="rotate-45 text-red-600" size={48} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The blog you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/blogs")}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Browse All Blogs
        </button>
      </div>
    </div>
  );

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">Loading Blog</h2>
        <p className="mt-2 text-gray-600">Fetching the latest insights...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30">
      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <button
          onClick={handleBookmark}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          title="Bookmark"
        >
          <Bookmark className={`${localStorage.getItem('blogBookmarks')?.includes(post._id) ? 'fill-yellow-400 text-yellow-500' : 'text-gray-600'} group-hover:text-yellow-500`} size={22} />
        </button>
        <button
          onClick={handleShare}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Share"
        >
          <Share2 className="text-gray-600 hover:text-blue-600" size={22} />
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform" /> 
            <span className="font-medium">Home</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/blogs")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <ArrowLeft size={18} /> All Blogs
            </button>
          </div>
        </div>

        {/* Blog Header with Gradient */}
        <div className="relative mb-12 animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl -rotate-1"></div>
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-1"
                >
                  <Tag size={14} /> {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            {/* Author & Meta Info */}
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{post.author}</p>
                  <p className="text-gray-600 text-sm">Author</p>
                </div>
              </div>
              
              <div className="h-8 w-px bg-gray-300"></div>
              
              <div className="flex flex-wrap gap-6 text-gray-600">
                <span className="flex items-center gap-2 font-medium">
                  <Calendar size={18} className="text-blue-600" /> 
                  {new Date(post.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>

                <span className="flex items-center gap-2 font-medium">
                  <Clock size={18} className="text-purple-600" /> 
                  {estimatedReadTime} min read
                </span>

                <span className="flex items-center gap-2 font-medium">
                  <Eye size={18} className="text-green-600" /> 
                  {(Math.random() * 1000 + 500).toFixed(0)} views
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Table of Contents - Card nahi, pure page par */}
        <div className="mb-12 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-6 border border-blue-100 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <List className="text-white" size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Table of Contents</h2>
                <p className="text-gray-600">Jump to any section of this blog</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
              {headings.length} sections
            </div>
          </div>
          
          {/* Table of Contents Grid - Pure page par spread out */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {headings.map((heading, index) => (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left p-4 rounded-xl transition-all duration-300 group border ${
                  activeHeading === heading.id 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-transparent' 
                    : 'bg-white/80 text-gray-800 hover:bg-white hover:shadow-md border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    activeHeading === heading.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold line-clamp-2">{heading.text}</div>
                    <div className={`text-sm mt-1 flex items-center gap-1 ${
                      activeHeading === heading.id ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        activeHeading === heading.id 
                          ? 'bg-white/20' 
                          : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        {heading.level === 1 ? 'Main' : heading.level === 2 ? 'Section' : 'Sub-section'}
                      </span>
                      {activeHeading === heading.id && (
                        <ChevronRight size={14} className="ml-auto animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Quick Actions - Table of Contents ke niche */}
          <div className="mt-8 pt-6 border-t border-gray-300/50">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <BookOpen size={18} /> Quick Actions
                </h3>
                <p className="text-sm text-gray-600">Save or share this blog</p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <button
                  onClick={handleBookmark}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  <Bookmark className={`${localStorage.getItem('blogBookmarks')?.includes(post._id) ? 'fill-yellow-400 text-yellow-500' : 'text-gray-600'}`} size={18} />
                  <span className="font-medium">Bookmark</span>
                </button>
                <button
                  onClick={handleShare}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Share2 size={18} />
                  <span className="font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
          {/* Featured Image with Overlay */}
          <div className="lg:w-full">
            <div className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                <p className="text-lg opacity-90">Featured Image</p>
              </div>
            </div>

            {/* Blog Content */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <article 
                ref={contentRef}
                className="prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 ml-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">About {post.author}</h3>
                  <p className="text-gray-600 mt-2">
                    Expert in technology and software development with years of experience in creating insightful content.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl text-white">
                <h3 className="text-3xl font-bold">Found this helpful?</h3>
                <p className="text-lg opacity-90 max-w-lg">
                  Share this blog with your network and help others discover valuable insights.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={handleShare}
                    className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <Share2 size={18} /> Share Article
                  </button>
                  <button
                    onClick={() => navigate("/blogs")}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Explore More Blogs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .prose {
          line-height: 1.8;
        }
        
        .prose h2 {
          margin-top: 2.5em;
          margin-bottom: 1em;
          padding-bottom: 0.5em;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .prose h3 {
          margin-top: 2em;
          margin-bottom: 0.8em;
        }
        
        .prose p {
          margin-bottom: 1.5em;
          font-size: 1.125rem;
        }
        
        .prose img {
          border-radius: 1rem;
          margin: 2em 0;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;