'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Brain } from 'lucide-react'

// MBTI测试题库
const questions = [
  {
    id: 1,
    question: '你更喜欢？',
    options: [
      { text: '与很多人交往，享受社交活动', value: 'E' },
      { text: '独自安静地思考，享受独处时光', value: 'I' }
    ]
  },
  {
    id: 2,
    question: '你获取信息的方式是？',
    options: [
      { text: '通过实际经验和具体事实', value: 'S' },
      { text: '通过直觉和抽象概念', value: 'N' }
    ]
  },
  {
    id: 3,
    question: '你做决策的方式是？',
    options: [
      { text: '基于逻辑和客观分析', value: 'T' },
      { text: '基于情感和个人价值观', value: 'F' }
    ]
  },
  {
    id: 4,
    question: '你喜欢的生活方式是？',
    options: [
      { text: '有计划、有条理', value: 'J' },
      { text: '灵活、随意', value: 'P' }
    ]
  },
  {
    id: 5,
    question: '在社交场合中，你通常是？',
    options: [
      { text: '主动参与，成为焦点', value: 'E' },
      { text: '观察为主，谨慎参与', value: 'I' }
    ]
  },
  {
    id: 6,
    question: '你更关注？',
    options: [
      { text: '现实的、具体的事物', value: 'S' },
      { text: '未来的、可能性的事物', value: 'N' }
    ]
  },
  {
    id: 7,
    question: '当与人意见不合时，你会？',
    options: [
      { text: '理性分析，寻找客观解决方案', value: 'T' },
      { text: '考虑对方感受，寻求和谐', value: 'F' }
    ]
  },
  {
    id: 8,
    question: '你对时间的态度是？',
    options: [
      { text: '严格遵守计划和时间表', value: 'J' },
      { text: '随遇而安，灵活调整', value: 'P' }
    ]
  },
  {
    id: 9,
    question: '你更喜欢的工作方式是？',
    options: [
      { text: '与团队合作，共同完成', value: 'E' },
      { text: '独立工作，自主完成', value: 'I' }
    ]
  },
  {
    id: 10,
    question: '你解决问题的方式是？',
    options: [
      { text: '基于已有的经验和知识', value: 'S' },
      { text: '尝试新方法和新思路', value: 'N' }
    ]
  },
  {
    id: 11,
    question: '你评价他人的标准是？',
    options: [
      { text: '能力和成就', value: 'T' },
      { text: '善良和人际关系', value: 'F' }
    ]
  },
  {
    id: 12,
    question: '你对生活的态度是？',
    options: [
      { text: '喜欢有明确的目标和计划', value: 'J' },
      { text: '喜欢保持开放和灵活', value: 'P' }
    ]
  }
]

// MBTI类型分析
const mbtiTypes = {
  ISTJ: {
    name: '检查员',
    description: '实际、逻辑、现实、负责，注重细节和传统',
    strengths: ['可靠', '务实', '有条理', '有责任感'],
    weaknesses: ['固执', '过于传统', '不善于表达情感']
  },
  ISFJ: {
    name: '守护者',
    description: '温暖、有同情心、有责任感，注重和谐和帮助他人',
    strengths: ['有爱心', '忠诚', '有责任感', '注重细节'],
    weaknesses: ['过于牺牲自己', '不善于拒绝', '容易感到压力']
  },
  INFJ: {
    name: '倡导者',
    description: '理想主义、有洞察力、有同情心，注重意义和价值观',
    strengths: ['有洞察力', '有同情心', '理想主义', '有创意'],
    weaknesses: ['过于理想化', '容易感到疲惫', '不善于处理冲突']
  },
  INTJ: {
    name: '建筑师',
    description: '理性、创新、独立、有战略思维，注重逻辑和效率',
    strengths: ['有逻辑', '有创造力', '独立', '有战略思维'],
    weaknesses: ['过于批判', '不善于表达情感', '对他人要求过高']
  },
  ISTP: {
    name: '鉴赏家',
    description: '实际、灵活、善于分析，注重行动和解决问题',
    strengths: ['实际', '灵活', '善于分析', '动手能力强'],
    weaknesses: ['冲动', '不善于规划', '对规则不耐烦']
  },
  ISFP: {
    name: '探险家',
    description: '敏感、灵活、有艺术气质，注重个人价值观和体验',
    strengths: ['敏感', '灵活', '有艺术气质', '注重和谐'],
    weaknesses: ['过于敏感', '缺乏规划', '对批评敏感']
  },
  INFP: {
    name: '调停者',
    description: '理想主义、有创造力、有同情心，注重个人价值观和意义',
    strengths: ['理想主义', '有创造力', '有同情心', '注重和谐'],
    weaknesses: ['过于理想化', '容易感到压力', '不善于处理冲突']
  },
  INTP: {
    name: '逻辑学家',
    description: '理性、好奇、独立，注重逻辑和理论',
    strengths: ['理性', '好奇', '独立', '有创造力'],
    weaknesses: ['过于理论化', '不善于社交', '对细节不耐烦']
  },
  ESTP: {
    name: '企业家',
    description: '实际、乐观、善于社交，注重行动和结果',
    strengths: ['实际', '乐观', '善于社交', '有活力'],
    weaknesses: ['冲动', '缺乏耐心', '对规则不耐烦']
  },
  ESFP: {
    name: '表演者',
    description: '外向、热情、有活力，注重体验和社交',
    strengths: ['外向', '热情', '有活力', '善于社交'],
    weaknesses: ['冲动', '缺乏规划', '对批评敏感']
  },
  ENFP: {
    name: '竞选者',
    description: '外向、理想主义、有创造力，注重可能性和人际关系',
    strengths: ['外向', '理想主义', '有创造力', '善于社交'],
    weaknesses: ['过于乐观', '缺乏规划', '容易分心']
  },
  ENTP: {
    name: '辩论家',
    description: '聪明、好奇、善于辩论，注重创新和挑战',
    strengths: ['聪明', '好奇', '善于辩论', '有创造力'],
    weaknesses: ['过于辩论', '不善于跟进', '对细节不耐烦']
  },
  ESTJ: {
    name: '执行官',
    description: '实际、逻辑、有组织，注重秩序和效率',
    strengths: ['实际', '有组织', '有责任感', '注重效率'],
    weaknesses: ['过于严格', '不善于表达情感', '对变化不耐烦']
  },
  ESFJ: {
    name: '领事',
    description: '外向、有同情心、有责任感，注重和谐和帮助他人',
    strengths: ['外向', '有同情心', '有责任感', '善于组织'],
    weaknesses: ['过于牺牲自己', '不善于拒绝', '对批评敏感']
  },
  ENFJ: {
    name: ' protagonist',
    description: '外向、理想主义、有领导力，注重人际关系和价值观',
    strengths: ['外向', '理想主义', '有领导力', '有同情心'],
    weaknesses: ['过于理想化', '容易感到压力', '对批评敏感']
  },
  ENTJ: {
    name: '指挥官',
    description: '理性、有领导力、有战略思维，注重效率和结果',
    strengths: ['理性', '有领导力', '有战略思维', '注重效率'],
    weaknesses: ['过于强势', '不善于表达情感', '对他人要求过高']
  }
}

export default function MBTITest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [mbtiType, setMbtiType] = useState('')

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // 计算MBTI类型
      const counts = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
      }

      Object.values(newAnswers).forEach(answer => {
        counts[answer as keyof typeof counts]++
      })

      const type = (
        (counts.E > counts.I ? 'E' : 'I') +
        (counts.S > counts.N ? 'S' : 'N') +
        (counts.T > counts.F ? 'T' : 'F') +
        (counts.J > counts.P ? 'J' : 'P')
      )

      setMbtiType(type)
      setShowResult(true)
    }
  }

  if (showResult) {
    const typeInfo = mbtiTypes[mbtiType as keyof typeof mbtiTypes]
    
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
          <section className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Brain className="text-primary text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">MBTI测试结果</h2>
              <p className="text-gray-600 dark:text-gray-400">你的性格类型是</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-4xl font-bold text-primary mb-2">{mbtiType}</h3>
                <p className="text-xl text-gray-600 dark:text-gray-400">{typeInfo?.name}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">类型描述</h4>
                <p className="text-gray-700 dark:text-gray-300">{typeInfo?.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">优势</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {typeInfo?.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">待提升</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {typeInfo?.weaknesses.map((weakness, index) => (
                      <li key={index}>{weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setShowResult(false)
                  setMbtiType('')
                }}
                className="btn btn-primary mr-4"
              >
                重新测试
              </button>
              <button 
                onClick={() => {
                  // 分享功能
                  if (navigator.share) {
                    navigator.share({
                      title: '我的MBTI性格类型',
                      text: `我是${mbtiType}类型，${typeInfo?.name}。来CloudTools测试你的性格类型吧！`,
                      url: window.location.href
                    })
                  } else {
                    // 复制链接到剪贴板
                    navigator.clipboard.writeText(window.location.href)
                    alert('链接已复制到剪贴板')
                  }
                }}
                className="btn btn-secondary"
              >
                分享结果
              </button>
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
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Brain className="text-primary text-6xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">MBTI性格测试</h2>
            <p className="text-gray-600 dark:text-gray-400">回答以下问题，了解你的性格类型</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">问题 {currentQuestion + 1} / {questions.length}</span>
                <div className="w-full max-w-md h-2 bg-gray-200 dark:bg-gray-700 rounded-full ml-4">
                  <div 
                    className="h-2 bg-primary rounded-full" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center mr-3">
                        <span className="text-sm">{index + 1}</span>
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="btn btn-secondary"
                >
                  上一题
                </button>
              )}
              {currentQuestion < questions.length - 1 && (
                <button
                  onClick={() => handleAnswer(questions[currentQuestion].options[0].value)}
                  className="btn btn-primary flex items-center"
                >
                  下一题 <ArrowRight className="ml-2" size={16} />
                </button>
              )}
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