'use client'

export const runtime = 'edge'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Book, ArrowLeft, Edit, Trash2 } from 'lucide-react'
import { useParams } from 'next/navigation'

interface Note {
  id: number
  title: string
  content: string
  created_at: string
  updated_at: string
  category: string
}

export default function NoteDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [note, setNote] = useState<Note | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNote()
  }, [id])

  const fetchNote = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/notes/${id}`)
      const data = await response.json()
      setNote(data)
    } catch (error) {
      console.error('获取笔记详情失败:', error)
      // 模拟数据，用于本地测试
      const mockData = {
        1: {
          id: 1,
          title: '购物清单',
          content: '- 牛奶\n- 鸡蛋\n- 面包\n- 蔬菜\n- 水果',
          created_at: '2026-01-01T00:00:00Z',
          updated_at: '2026-01-01T00:00:00Z',
          category: '生活'
        },
        2: {
          id: 2,
          title: '工作任务',
          content: '1. 完成项目报告\n2. 参加团队会议\n3. 回复客户邮件\n4. 准备下周计划',
          created_at: '2026-01-02T00:00:00Z',
          updated_at: '2026-01-02T00:00:00Z',
          category: '工作'
        },
        3: {
          id: 3,
          title: '学习计划',
          content: '- 学习TypeScript\n- 练习React\n- 了解Cloudflare Workers\n- 阅读技术文档',
          created_at: '2026-01-03T00:00:00Z',
          updated_at: '2026-01-03T00:00:00Z',
          category: '学习'
        }
      }
      setNote(mockData[id as unknown as keyof typeof mockData] || null)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (confirm('确定要删除这篇笔记吗？')) {
      try {
        await fetch(`http://localhost:8787/api/notes/${id}`, {
          method: 'DELETE'
        })
        // 跳转到笔记列表页
        window.location.href = '/notebook'
      } catch (error) {
        console.error('删除笔记失败:', error)
      }
    }
  }

  if (loading) {
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
            <div className="text-center py-12">
              <p>加载中...</p>
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

  if (!note) {
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
            <div className="text-center py-12">
              <p>笔记不存在</p>
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
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold mb-4">{note.title}</h2>
              <div className="flex space-x-2">
                <Link href={`/notebook/edit/${note.id}`} className="text-gray-500 hover:text-primary">
                  <Edit size={18} />
                </Link>
                <button
                  onClick={handleDelete}
                  className="text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            {note.category && (
              <div className="mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {note.category}
                </span>
              </div>
            )}

            <div className="text-sm text-gray-500 mb-6">
              <p>创建于: {new Date(note.created_at).toLocaleString()}</p>
              {note.updated_at !== note.created_at && (
                <p>更新于: {new Date(note.updated_at).toLocaleString()}</p>
              )}
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: note.content }} />
            </div>
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