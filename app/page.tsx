import Link from 'next/link'
import { Brain, Star, BookOpen, FileText, Wrench } from 'lucide-react'

const tools = [
  {
    title: 'MBTI测试',
    description: '探索你的性格类型，了解自己的优势和特点',
    icon: Brain,
    link: '/mbti',
  },
  {
    title: '星座测试',
    description: '查看每日运势，了解星座特点和配对',
    icon: Star,
    link: '/horoscope',
  },
  {
    title: '个人博客',
    description: '记录生活点滴，分享个人见解',
    icon: BookOpen,
    link: '/blog',
  },
  {
    title: '在线记事本',
    description: '随时随地记录想法，云端同步',
    icon: FileText,
    link: '/notebook',
  },
  {
    title: '实用小工具',
    description: '计算器、密码生成器等实用工具',
    icon: Wrench,
    link: '/tools',
  },
]

export default function Home() {
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
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">个人全能工具站</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            基于Cloudflare全栈技术构建的轻量级工具站，为你提供一站式的个人工具解决方案
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Link key={index} href={tool.link} className="block">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
                  <div className="text-primary text-4xl mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
                </div>
              </Link>
            )
          })}
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