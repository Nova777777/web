'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Book, ArrowLeft, Save } from 'lucide-react'
import markdownit from 'markdown-it'

const md = markdownit()

export default function NoteNewPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  })
  const [preview, setPreview] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.content) {
      alert('标题和内容不能为空')
      return
    }

    try {
      setLoading(true)
      const response = await fetch('http://localhost:8787/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // 跳转到笔记列表页
        window.location.href = '/notebook'
      } else {
        const error = await response.json()
        alert(error.error || '创建笔记失败')
      }
    } catch (error) {
      console.error('创建笔记失败:', error)
      alert('创建笔记失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">CloudTools</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-primary">首页</Link></li>
              <li><Link href="/mbti" className="hover:text-primary">MBTI测试</Link></li>
              <li><Link href="/horoscope" className="hover:text-primary">星座测试</Link></li>
              <li><Link href="/blog" className="hover:text-primary">博客</Link></li>
              <li><Link href="/notebook" className="hover:text-primary">记事本</Link></li>
              <li><Link href="/tools" className="hover:text-primary">工具</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/notebook" className="btn flex items-center text-gray-600 dark:text-gray-400 hover:text-primary">
              <ArrowLeft size={18} className="mr-2" />
              返回笔记列表
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">新建笔记</h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">标题</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="请输入笔记标题"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">分类</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="请输入分类"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="content" className="block text-sm font-medium">内容</label>
                    <button
                      type="button"
                      onClick={() => setPreview(!preview)}
                      className="text-sm text-primary"
                    >
                      {preview ? '编辑' : '预览'}
                    </button>
                  </div>
                  {preview ? (
                    <div className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 min-h-[400px] prose dark:prose-invert">
                      {formData.content ? (
                        <div dangerouslySetInnerHTML={{ __html: md.render(formData.content) }} />
                      ) : (
                        <p>请输入内容</p>
                      )}
                    </div>
                  ) : (
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[400px]"
                      placeholder="请输入笔记内容（支持Markdown格式）"
                      required
                    />
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center"
                    disabled={loading}
                  >
                    <Save size={18} className="mr-2" />
                    {loading ? '保存中...' : '保存'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 CloudTools. 基于Cloudflare全栈技术构建。</p>
        </div>
      </footer>
    </div>
  )
}