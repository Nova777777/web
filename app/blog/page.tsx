'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Search, Plus, Edit, Trash2 } from 'lucide-react'

interface Blog {
  id: number
  title: string
  content: string
  created_at: string
  updated_at: string
  category: string
  tags: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://cloudtools-api.493024082.workers.dev/api/blogs')
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error('获取博客失败:', error)
      // 模拟数据，用于本地测试
      const mockData = [
        {
          id: 1,
          title: '欢迎使用CloudTools',
          content: '# CloudTools 个人全能工具站\n\n这是一个基于Cloudflare全栈技术构建的个人工具站，包含MBTI测试、星座测试、个人博客、在线记事本和实用小工具。\n\n## 功能特点\n\n- **MBTI测试**：12道题目，16种人格类型分析\n- **星座测试**：12个星座，每日运势分析\n- **个人博客**：支持Markdown编辑，分类和标签管理\n- **在线记事本**：快速记录，随时查看\n- **实用工具**：计算器、密码生成器、时间转换器、二维码生成器\n\n## 技术栈\n\n- **前端**：Next.js 15 + TypeScript + Tailwind CSS + ShadCN UI\n- **后端**：Cloudflare Workers + D1数据库 + KV存储\n- **部署**：Cloudflare Pages\n\n希望你喜欢这个工具站！',
          created_at: '2026-01-01T00:00:00Z',
          updated_at: '2026-01-01T00:00:00Z',
          category: '技术',
          tags: 'Cloudflare,Next.js,TypeScript'
        },
        {
          id: 2,
          title: 'MBTI测试的原理与应用',
          content: '# MBTI测试的原理与应用\n\nMBTI（Myers-Briggs Type Indicator）是一种基于卡尔·荣格的心理类型理论发展而来的人格评估工具。\n\n## 四个维度\n\n1. **外向(E) vs 内向(I)**：能量来源\n2. **感觉(S) vs 直觉(N)**：信息获取方式\n3. **思考(T) vs 情感(F)**：决策方式\n4. **判断(J) vs 感知(P)**：生活方式\n\n## 应用场景\n\n- 职业规划\n- 团队建设\n- 个人成长\n- 人际关系\n\n通过MBTI测试，我们可以更好地了解自己的性格特点，从而在各个方面做出更适合自己的选择。',
          created_at: '2026-01-02T00:00:00Z',
          updated_at: '2026-01-02T00:00:00Z',
          category: '心理学',
          tags: 'MBTI,性格测试'
        }
      ]
      setBlogs(mockData)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('确定要删除这篇博客吗？')) {
      try {
        await fetch(`http://localhost:8787/api/blogs/${id}`, {
          method: 'DELETE'
        })
        fetchBlogs()
      } catch (error) {
        console.error('删除博客失败:', error)
      }
    }
  }

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !category || blog.category === category
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean)))

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
          <div className="flex justify-between items-center mb-8">
            <div>
              <BookOpen className="text-primary text-4xl mb-2" />
              <h2 className="text-3xl font-bold">个人博客</h2>
              <p className="text-gray-600 dark:text-gray-400">记录生活点滴，分享个人见解</p>
            </div>
            <Link href="/blog/new" className="btn btn-primary flex items-center">
              <Plus size={18} className="mr-2" />
              新建博客
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="搜索博客..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">所有分类</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p>加载中...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p>暂无博客</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBlogs.map((blog) => (
                <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/blog/${blog.id}`} className="hover:text-primary">
                        {blog.title}
                      </Link>
                    </h3>
                    <div className="flex space-x-2">
                      <Link href={`/blog/edit/${blog.id}`} className="text-gray-500 hover:text-primary">
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div>
                      {blog.category && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full mr-2">
                          {blog.category}
                        </span>
                      )}
                      {blog.tags && blog.tags.split(',').map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full mr-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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