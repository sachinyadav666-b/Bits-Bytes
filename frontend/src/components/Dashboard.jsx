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

// const API_URL = 'http://localhost:5000'
const API_URL = 'https://bitsandbytesit.onrender.com'; // <-- Backend URL in-file as requested

const AdminPanel = () => {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    image: '', // preview URL
    tags: '',
    status: 'Published'
  })

  // Actual selected file to upload
  const [selectedImageFile, setSelectedImageFile] = useState(null)

  // --- Auth check + initial load ---
  useEffect(() => {
    const isAdmin = localStorage.getItem('adminToken')
    if (!isAdmin) {
      navigate('/login')
      return
    }
    loadBlogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

  // --- Load blogs from backend ---
  const loadBlogs = async () => {
    const res = await fetch(`${API_URL}/api/blogs`)
    const data = await res.json()

    if (Array.isArray(data)) setBlogs(data)
    else if (Array.isArray(data.blogs)) setBlogs(data.blogs)
    else setBlogs([])
  }

  // --- Save helper after CRUD operations ---
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

  // --- Delete blog ---
  const handleDelete = async id => {
    const ok = window.confirm('Are you sure you want to delete this blog?')
    if (!ok) return

    try {
      const res = await fetch(`${API_URL}/api/blogs/${id}`, {
        method: 'DELETE'
      })

      if (!res.ok) throw new Error('Delete failed')
      await loadBlogs()
      alert('Deleted successfully.')
    } catch (err) {
      console.error('Delete error:', err)
      alert('Delete failed. Check console.')
    }
  }

  // --- Open modal for create or edit ---
  const openModal = (blog = null) => {
    if (blog) {
      setEditingId(blog._id || blog.id)
      setFormData({
        title: blog.title || '',
        category: blog.category || '',
        content: blog.content || '',
        image: blog.image || '',
        tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags || '',
        status: blog.status || 'Published'
      })
      setSelectedImageFile(null) // reset selected file
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
      setSelectedImageFile(null)
    }
    setIsModalOpen(true)
  }

  // --- Thumbnail change (store file for upload + preview) ---
  const handleThumbnailUpload = e => {
    const file = e.target.files?.[0]
    if (!file) return
    setSelectedImageFile(file)
    const previewUrl = URL.createObjectURL(file)
    setFormData(s => ({ ...s, image: previewUrl }))
  }

  // --- Submit create / update ---
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const form = new FormData()
      form.append('title', formData.title)
      form.append('category', formData.category)
      form.append('content', formData.content)
      form.append('tags', formData.tags)
      form.append('status', formData.status)

      // If user selected a new file, append it. Backend should handle absence of file (keep old image).
      if (selectedImageFile) {
        form.append('image', selectedImageFile)
      }

      let url = `${API_URL}/api/blogs/create`
      let method = 'POST'

      if (editingId) {
        url = `${API_URL}/api/blogs/${editingId}`
        method = 'PUT'
      }

      const res = await fetch(url, {
        method,
        body: form
      })

      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || 'Save failed')
      }

      await refreshAndClose()
      alert(editingId ? 'Post updated.' : 'Post created.')
    } catch (err) {
      console.error('Submit error:', err)
      alert('Save failed. Check console.')
    }
  }

  // --- Filtering for table ---
  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='flex h-screen bg-gray-50 text-slate-900 font-sans overflow-hidden'>
      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='h-full flex flex-col p-6'>
          <div className='flex items-center gap-2 mb-10'>
            <div className='w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-black'>
              B
            </div>
            <span className='font-black text-xl tracking-tight'>
              BITS<span className='text-cyan-600'>ADMIN</span>
            </span>
          </div>

          <nav className='space-y-2 flex-1'>
            <div className='text-xs font-bold text-gray-400 uppercase tracking-widest mb-4'>
              Main Menu
            </div>
            <button className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold bg-cyan-50 text-cyan-700 shadow-sm'>
              <FileText size={18} /> Manage Blogs
            </button>
            <button
              onClick={() => openModal()}
              className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-slate-900 transition-all'
            >
              <PlusCircle size={18} /> Add New Blog
            </button>
          </nav>

          <div className='mt-auto pt-6 border-t border-gray-100 space-y-3'>
            <Link to='/'>
              <button className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1'>
                Visit Website <ExternalLink size={16} />
              </button>
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('isAdmin')
                navigate('/login')
              }}
              className='w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-200 text-red-600 rounded-xl text-sm font-bold hover:bg-red-50 transition-all'
            >
              Logout <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className='flex-1 flex flex-col relative overflow-hidden'>
        <header className='h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8'>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className='lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg'
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className='text-2xl font-black text-slate-900 hidden md:block'>
              Dashboard
            </h1>
          </div>

          <div className='relative hidden md:block'>
            <Search
              className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
              size={16}
            />
            <input
              type='text'
              placeholder='Search blogs...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              className='pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:border-cyan-500 transition-all'
            />
          </div>
        </header>

        <div className='flex-1 overflow-y-auto p-8 bg-gray-50/50'>
          <div className='flex flex-wrap justify-between items-center mb-8 gap-4'>
            <div>
              <h2 className='text-lg font-bold text-slate-800'>
                All Posts ({blogs.length})
              </h2>
              <p className='text-sm text-gray-500'>
                Manage your website content dynamically.
              </p>
            </div>
            <button
              onClick={() => openModal()}
              className='flex items-center gap-2 px-6 py-2.5 bg-cyan-600 text-white rounded-full font-bold text-sm hover:bg-cyan-700 transition-all shadow-md'
            >
              <PlusCircle size={18} /> Create New Post
            </button>
          </div>

          <div className='bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='w-full text-left text-sm text-gray-600'>
                <thead className='bg-gray-50/50 text-gray-500 uppercase font-bold text-xs border-b border-gray-100'>
                  <tr>
                    <th className='px-6 py-4'>Thumbnail</th>
                    <th className='px-6 py-4'>Title</th>
                    <th className='px-6 py-4'>Category</th>
                    <th className='px-6 py-4'>Date</th>
                    <th className='px-6 py-4'>Status</th>
                    <th className='px-6 py-4 text-right'>Actions</th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-100'>
                  {filteredBlogs.map(blog => (
                    <tr
                      key={blog._id || blog.id}
                      className='hover:bg-gray-50/80 transition-colors'
                    >
                      <td className='px-6 py-4'>
                        <div className='w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200'>
                          {blog.image ? (
                            <img
                              src={blog.image}
                              alt='Thumb'
                              className='w-full h-full object-cover'
                            />
                          ) : (
                            <ImageIcon
                              size={20}
                              className='m-auto mt-3 text-gray-400'
                            />
                          )}
                        </div>
                      </td>

                      <td className='px-6 py-4 font-bold text-slate-900'>
                        {blog.title}
                      </td>
                      <td className='px-6 py-4'>
                        <span className='px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600'>
                          {blog.category}
                        </span>
                      </td>
                      <td className='px-6 py-4 font-mono text-xs'>
                        {blog.date}
                      </td>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200'>
                          <span className='w-1.5 h-1.5 rounded-full bg-green-500'></span>{' '}
                          {blog.status || 'Published'}
                        </span>
                      </td>

                      <td className='px-6 py-4 text-right'>
                        <div className='flex items-center justify-end gap-2'>
                          <button
                            onClick={() => openModal(blog)}
                            className='p-2 text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all'
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(blog._id || blog.id)}
                            className='p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all'
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredBlogs.length === 0 && (
                    <tr>
                      <td
                        colSpan='6'
                        className='text-center py-8 text-gray-400'
                      >
                        No blogs found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* ADD / EDIT MODAL */}
      {isModalOpen && (
        <div className='fixed inset-0 z-[60] flex justify-center items-center p-4'>
          <div
            className='absolute inset-0 bg-black/40 backdrop-blur-sm'
            onClick={() => setIsModalOpen(false)}
          />
          <div className='relative z-10 bg-white border border-gray-200 p-8 rounded-3xl w-full max-w-4xl shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-2xl font-black text-slate-900'>
                {editingId ? 'Edit Blog' : 'Compose New Blog'}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={24} className='text-gray-400 hover:text-red-500' />
              </button>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
              <input
                placeholder='Title'
                value={formData.title}
                required
                onChange={e =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-cyan-500 font-bold'
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  placeholder='Category'
                  value={formData.category}
                  required
                  onChange={e =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className='px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-cyan-500'
                />
                <input
                  placeholder='Tags (comma separated)'
                  value={formData.tags}
                  onChange={e =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  className='px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-cyan-500'
                />
              </div>

              {/* Upload Click Area */}
              <div
                className='p-4 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer text-center relative group'
                onClick={() => fileInputRef.current.click()}
              >
                <input
                  type='file'
                  accept='image/*'
                  ref={fileInputRef}
                  className='hidden'
                  onChange={handleThumbnailUpload}
                />

                {formData.image ? (
                  <div className='relative h-48 w-full'>
                    <img
                      src={formData.image}
                      alt='Preview'
                      className='h-full w-full object-contain rounded-lg'
                    />
                    <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg'>
                      <span className='text-white font-bold flex items-center gap-2'>
                        <Upload size={20} /> Change Image
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className='py-8 flex flex-col items-center text-gray-400'>
                    <ImageIcon size={40} className='mb-2 text-gray-300' />
                    <span className='text-sm font-bold'>
                      Click to Upload Thumbnail Image
                    </span>
                  </div>
                )}
              </div>

              {/* TinyMCE Editor */}
              <div className='border border-gray-200 rounded-xl overflow-hidden'>
                <Editor
                  apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                  value={formData.content}
                  onEditorChange={newContent =>
                    setFormData({ ...formData, content: newContent })
                  }
                  init={{
                    height: 400,
                    menubar: false,
                    placeholder:
                      'Write details here... Click Image icon to upload photos.',

                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'code',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                      'help',
                      'wordcount'
                    ],

                    toolbar:
                      'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'link localUpload media | removeformat | help',

                    // 1. Solution for White Links:
                    // Ye setting har naye link par blue color aur underline laga degi
                    link_class_list: [
                      {
                        title: 'Blue Link',
                        value: 'text-blue-600 underline hover:text-blue-800'
                      }
                    ],

                    // 2. Solution for Headings (Normal text fix):
                    formats: {
                      h1: { block: 'h1', classes: 'text-4xl font-bold mb-4' },
                      h2: { block: 'h2', classes: 'text-3xl font-bold mb-3' },
                      h3: { block: 'h3', classes: 'text-2xl font-bold mb-2' },
                      p: { block: 'p', classes: 'mb-4 text-base' },
                      ul: { block: 'ul', classes: 'list-disc pl-5 mb-4' },
                      ol: { block: 'ol', classes: 'list-decimal pl-5 mb-4' }
                    },

                    // 3. Editor ke andar bhi Link Blue dikhe
                    content_style: `
        body { font-family:Helvetica,Arial,sans-serif; font-size:14px } 
        img { max-width: 100%; height: auto; }
        a { color: #2563eb; text-decoration: underline; } 
      `,

                    setup: editor => {
                      editor.ui.registry.addButton('localUpload', {
                        icon: 'image',
                        tooltip: 'Upload Image',
                        onAction: () => {
                          const input = document.createElement('input')
                          input.setAttribute('type', 'file')
                          input.setAttribute('accept', 'image/*')
                          input.onchange = function () {
                            const file = this.files[0]
                            if (file) {
                              const reader = new FileReader()
                              reader.onload = function () {
                                const id = 'blobid' + new Date().getTime()
                                const blobCache = editor.editorUpload.blobCache
                                const base64 = reader.result.split(',')[1]
                                const blobInfo = blobCache.create(
                                  id,
                                  file,
                                  base64
                                )
                                blobCache.add(blobInfo)
                                editor.insertContent(
                                  `<img src="${blobInfo.blobUri()}" alt="${
                                    file.name
                                  }"/>`
                                )
                              }
                              reader.readAsDataURL(file)
                            }
                          }
                          input.click()
                        }
                      })
                    }
                  }}
                />
              </div>
              <button
                type='submit'
                className='w-full px-6 py-3 bg-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-700 shadow-lg'
              >
                <Save size={18} /> {editingId ? 'Update Post' : 'Publish Post'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
