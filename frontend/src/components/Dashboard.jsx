import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'
import {
  FileText,
  PlusCircle,
  ExternalLink,
  Search,
  Menu,
  X,
  Edit2,
  Trash2,
  Save,
  LogOut,
  Upload,
  Image as ImageIcon
} from 'lucide-react'

const API_URL = 'http://localhost:5000'
// const API_URL = 'https://bitsandbytes-sb2k.onrender.com'

/* 🔥 FILE → BASE64 HELPER */
const fileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

const AdminPanel = () => {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
    tags: '',
    status: 'Published'
  })

  const [selectedImageFile, setSelectedImageFile] = useState(null)

  /* AUTH + LOAD */
  useEffect(() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/login')
      return
    }
    loadBlogs()
  }, [navigate])

  const loadBlogs = async () => {
    const res = await fetch(`${API_URL}/api/blogs`)
    const data = await res.json()
    setBlogs(Array.isArray(data) ? data : [])
  }

  const refreshAndClose = async () => {
    await loadBlogs()
    setIsModalOpen(false)
    setEditingId(null)
    setFormData({
      title: '',
      category: '',
      content: '',
      image: '',
      tags: '',
      status: 'Published'
    })
    setSelectedImageFile(null)
  }

  /* DELETE */
  const handleDelete = async id => {
    if (!window.confirm('Delete this blog?')) return
    await fetch(`${API_URL}/api/blogs/${id}`, { method: 'DELETE' })
    loadBlogs()
  }

  /* OPEN MODAL */
  const openModal = blog => {
    if (blog) {
      setEditingId(blog._id)
      setFormData({
        title: blog.title,
        category: blog.category,
        content: blog.content,
        image: blog.image,
        tags: blog.tags?.join(', '),
        status: blog.status
      })
    } else {
      setEditingId(null)
      setFormData({
        title: '',
        category: '',
        content: '',
        image: '',
        tags: '',
        status: 'Published'
      })
    }
    setSelectedImageFile(null)
    setIsModalOpen(true)
  }

  /* IMAGE PREVIEW */
const handleThumbnailUpload = e => {
  const file = e.target.files?.[0]
  if (!file) return

  // 🔴 2MB limit
  if (file.size > 2 * 1024 * 1024) {
    alert("Image size must be less than 2MB")
    return
  }

  setSelectedImageFile(file)
  setFormData(s => ({ ...s, image: URL.createObjectURL(file) }))
}


  /* 🔥 SUBMIT (BASE64 JSON) */
  const handleSubmit = async e => {
    e.preventDefault()

    let imageBase64 = null
    if (selectedImageFile) {
      imageBase64 = await fileToBase64(selectedImageFile)
    }

    const payload = {
      title: formData.title,
      category: formData.category,
      content: formData.content,
      tags: formData.tags,
      status: formData.status,
      image: imageBase64
    }

    const url = editingId
      ? `${API_URL}/api/blogs/${editingId}`
      : `${API_URL}/api/blogs/create`

    const method = editingId ? 'PUT' : 'POST'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    refreshAndClose()
  }

  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  )

return (
<div className="flex h-screen bg-gray-100 overflow-hidden">

{/* SIDEBAR */}
<aside className={`w-64 bg-white shadow-lg ${isSidebarOpen ? "" : "hidden lg:block"}`}>
<div className="p-6 h-full flex flex-col">

<h2 className="text-2xl font-black mb-10">
BITS <span className="text-cyan-600">ADMIN</span>
</h2>

<nav className="flex flex-col gap-4">

<button className="flex items-center gap-3 text-gray-700 font-semibold hover:text-cyan-600">
<FileText size={18}/> Blogs
</button>

<button
onClick={() => openModal()}
className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
>
<PlusCircle size={16}/> Add Blog
</button>

</nav>

<div className="mt-auto pt-10">
<button
onClick={()=>{
localStorage.clear()
navigate("/login")
}}
className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-700"
>
<LogOut size={16}/> Logout
</button>
</div>

</div>
</aside>


{/* MAIN */}
<main className="flex-1 p-8 overflow-y-auto">

{/* HEADER */}
<div className="flex justify-between items-center mb-6">
<h1 className="text-3xl font-black text-gray-800">Blog Manager</h1>

<div className="relative">
<Search className="absolute left-3 top-3 text-gray-400" size={18}/>
<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search blogs..."
className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
/>
</div>

</div>


{/* TABLE CARD */}
<div className="bg-white shadow-md rounded-xl overflow-hidden">

<table className="w-full text-left">

<thead className="bg-gray-50 border-b">
<tr className="text-gray-600 text-sm uppercase">
<th className="p-4">Image</th>
<th className="p-4">Title</th>
<th className="p-4">Category</th>
<th className="p-4 text-center">Actions</th>
</tr>
</thead>

<tbody>

{filteredBlogs.map(blog=>(
<tr key={blog._id} className="border-b hover:bg-gray-50">

<td className="p-4">
{blog.image && (
<img
src={blog.image}
className="w-14 h-14 object-cover rounded-lg"
/>
)}
</td>

<td className="p-4 font-semibold text-gray-700">
{blog.title}
</td>

<td className="p-4 text-gray-500">
{blog.category}
</td>

<td className="p-4 flex justify-center gap-3">

<button
onClick={()=>openModal(blog)}
className="p-2 bg-yellow-100 text-yellow-600 rounded hover:bg-yellow-200"
>
<Edit2 size={16}/>
</button>

<button
onClick={()=>handleDelete(blog._id)}
className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
>
<Trash2 size={16}/>
</button>

</td>

</tr>
))}

</tbody>
</table>

</div>

</main>


{/* MODAL */}
{isModalOpen && (
<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-8 overflow-y-auto max-h-[90vh]">

<h2 className="text-2xl font-bold mb-6">
{editingId ? "Edit Blog" : "Create Blog"}
</h2>

<form onSubmit={handleSubmit} className="space-y-5">

<input
placeholder="Blog Title"
value={formData.title}
onChange={(e)=>setFormData({...formData,title:e.target.value})}
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
/>

<input
placeholder="Category"
value={formData.category}
onChange={(e)=>setFormData({...formData,category:e.target.value})}
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
/>

<input
placeholder="Tags (comma separated)"
value={formData.tags}
onChange={(e)=>setFormData({...formData,tags:e.target.value})}
className="w-full border rounded-lg p-3"
/>


{/* IMAGE UPLOAD */}
<div className="border rounded-lg p-4 flex flex-col gap-3">

<label className="flex items-center gap-2 font-semibold text-gray-600">
<ImageIcon size={18}/> Blog Thumbnail
</label>

<input
type="file"
ref={fileInputRef}
onChange={handleThumbnailUpload}
/>

{formData.image && (
<img
src={formData.image}
className="w-40 rounded-lg shadow"
/>
)}

</div>


{/* BLOG EDITOR */}
<textarea
  placeholder="Write blog content..."
  value={formData.content}
  onChange={(e) =>
    setFormData({ ...formData, content: e.target.value })
  }
  className="w-full border rounded-lg p-3 min-h-[200px] focus:ring-2 focus:ring-cyan-500 outline-none"
/>



{/* ACTION BUTTONS */}
<div className="flex justify-end gap-4 pt-4">

<button
type="button"
onClick={()=>setIsModalOpen(false)}
className="px-5 py-2 rounded-lg border"
>
Cancel
</button>

<button
className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90"
>
<Save size={16}/>
{editingId ? "Update Blog" : "Publish Blog"}
</button>

</div>

</form>

</div>

</div>
)}

</div>
)

}

export default AdminPanel


