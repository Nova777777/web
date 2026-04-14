'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Book, Search, Plus, Edit, Trash2 } from 'lucide-react'

interface Note {
  id: number
  title: string
  content: string
  created_at: string
  updated_at: string
  category: string
}

export default function NotebookPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/notes')
      const data = await response.json()
      setNotes(data)
    } catch (error) {
      console.error('获取笔记失败:', error)
      // 模拟数据，用于本地测试
      const mockData = [
        {
          id: 1,
          title: '购物清单',
          content: '- 牛奶\n- 鸡蛋\n- 面包\n- 蔬菜\n- 水果',
          created_at: '2026-01-01T00:00:00Z',
          updated_at: '2026-01-01T00:00:00Z',
          category: '生活'
        },
        {
          id: 2,
          title: '工作任务',
          content: '1. 完成项目报告\n2. 参加团队会议\n3. 回复客户邮件\n4. 准备下周计划',
          created_at: '2026-01-02T00:00:00Z',
          updated_at: '2026-01-02T00:00:00Z',
          category: '工作'
        },
        {
          id: 3,
          title: '学习计划',
          content: '- 学习TypeScript\n- 练习React\n- 了解Cloudflare Workers\n- 阅读技术文档',
          created_at: '2026-01-03T00:00:00Z',
          updated_at: '2026-01-03T00:00:00Z',
          category: '学习'
        }
      ]
      setNotes(mockData)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('确定要删除这篇笔记吗？')) {
      try {
        await fetch(`http://localhost:8787/api/notes/${id}`, {
          method: 'DELETE'
        })
        fetchNotes()
      } catch (error) {
        console.error('删除笔记失败:', error)
      }
    }
  }

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         note.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !category || note.category === category
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(notes.map(note => note.category).filter(Boolean)))

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
              <Book className="text-primary text-4xl mb-2" />
              <h2 className="text-3xl font-bold">在线记事本</h2>
              <p className="text-gray-600 dark:text-gray-400">快速记录，随时查看</p>
            </div>
            <Link href="/notebook/new" className="btn btn-primary flex items-center">
              <Plus size={18} className="mr-2" />
              新建笔记
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="搜索笔记..."
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
          ) : filteredNotes.length === 0 ? (
            <div className="text-center py-12">
              <p>暂无笔记</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNotes.map((note) => (
                <div key={note.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/notebook/${note.id}`} className="hover:text-primary">
                        {note.title}
                      </Link>
                    </h3>
                    <div className="flex space-x-2">
                      <Link href={`/notebook/edit/${note.id}`} className="text-gray-500 hover:text-primary">
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(note.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {note.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div>
                      {note.category && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {note.category}
                        </span>
                      )}
                    </div>
                    <div>
                      {new Date(note.updated_at).toLocaleString()}
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