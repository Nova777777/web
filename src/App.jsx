import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

// 导入页面组件
import MBTITest from './pages/MBTITest';
import HoroscopeTest from './pages/HoroscopeTest';
import Blog from './pages/Blog';
import Notebook from './pages/Notebook';
import Tools from './pages/Tools';

// 页面组件
const Home = () => (
  <div className="section container">
    <div className="text-center mb-12">
      <h1 className="title">欢迎使用Cloudflare多功能应用</h1>
      <p className="text max-w-2xl mx-auto">
        这是一个集成了多种实用功能的应用，包括MBTI测试、星座测试、个人博客、记事本和小工具集合
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* MBTI测试卡片 */}
      <div className="card hover:shadow-xl transition-all duration-300">
        <div className="h-40 bg-primary/10 rounded-t-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">MBTI测试</h3>
          <p className="text text-gray-600 mb-4">了解你的性格类型，探索自己的优势和特点</p>
          <NavLink to="/mbti" className="text-primary hover:underline font-medium">
            开始测试 →
          </NavLink>
        </div>
      </div>
      
      {/* 星座测试卡片 */}
      <div className="card hover:shadow-xl transition-all duration-300">
        <div className="h-40 bg-secondary/10 rounded-t-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">星座测试</h3>
          <p className="text text-gray-600 mb-4">输入你的出生日期，了解你的星座特点和今日运势</p>
          <NavLink to="/horoscope" className="text-secondary hover:underline font-medium">
            开始测试 →
          </NavLink>
        </div>
      </div>
      
      {/* 个人博客卡片 */}
      <div className="card hover:shadow-xl transition-all duration-300">
        <div className="h-40 bg-accent/10 rounded-t-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">个人博客</h3>
          <p className="text text-gray-600 mb-4">浏览和阅读各种主题的博客文章，分享知识和见解</p>
          <NavLink to="/blog" className="text-accent hover:underline font-medium">
            浏览博客 →
          </NavLink>
        </div>
      </div>
      
      {/* 记事本卡片 */}
      <div className="card hover:shadow-xl transition-all duration-300">
        <div className="h-40 bg-primary/10 rounded-t-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">记事本</h3>
          <p className="text text-gray-600 mb-4">创建和管理你的笔记，记录重要信息和想法</p>
          <NavLink to="/notebook" className="text-primary hover:underline font-medium">
            打开记事本 →
          </NavLink>
        </div>
      </div>
      
      {/* 小工具卡片 */}
      <div className="card hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
        <div className="h-40 bg-secondary/10 rounded-t-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">小工具</h3>
          <p className="text text-gray-600 mb-4">使用各种实用工具，如计算器、倒计时器、单位转换器和密码生成器</p>
          <NavLink to="/tools" className="text-secondary hover:underline font-medium">
            打开工具 →
          </NavLink>
        </div>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* 导航栏 */}
        <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
          <div className="container flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Cloudflare App</div>
            <div className="hidden md:flex space-x-6">
              <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors'}>首页</NavLink>
              <NavLink to="/mbti" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors'}>MBTI测试</NavLink>
              <NavLink to="/horoscope" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors'}>星座测试</NavLink>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors'}>博客</NavLink>
              <NavLink to="/notebook" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors'}>记事本</NavLink>
              <NavLink to="/tools" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors'}>小工具</NavLink>
            </div>
            <div className="md:hidden">
              {/* 移动端菜单按钮 */}
              <button className="text-gray-600 hover:text-primary focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* 主内容 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mbti" element={<MBTITest />} />
            <Route path="/horoscope" element={<HoroscopeTest />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/notebook" element={<Notebook />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </main>

        {/* 页脚 */}
        <footer className="bg-dark text-white py-8">
          <div className="container">
            <div className="text-center">
              <p>© 2024 Cloudflare多功能应用</p>
              <p className="text-gray-400 text-sm mt-2">部署在Cloudflare Pages上</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App