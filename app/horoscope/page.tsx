'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Star, Sun, Moon } from 'lucide-react'
import dayjs from 'dayjs'

// 星座数据
const zodiacs = [
  {
    name: '白羊座',
    dateRange: '3月21日 - 4月19日',
    element: '火象',
    ruler: '火星',
    personality: '热情、冲动、勇敢、自信',
    strengths: ['热情', '勇敢', '自信', '领导力'],
    weaknesses: ['冲动', '急躁', '自我中心', '缺乏耐心'],
    career: '适合需要创造力和领导力的工作，如企业家、运动员、销售人员',
    compatibility: ['狮子座', '射手座', '双子座', '水瓶座']
  },
  {
    name: '金牛座',
    dateRange: '4月20日 - 5月20日',
    element: '土象',
    ruler: '金星',
    personality: '稳重、务实、忠诚、固执',
    strengths: ['稳重', '务实', '忠诚', '耐心'],
    weaknesses: ['固执', '物质主义', '懒惰', '占有欲强'],
    career: '适合需要耐心和稳定性的工作，如财务、会计、工程师',
    compatibility: ['处女座', '摩羯座', '双鱼座', '巨蟹座']
  },
  {
    name: '双子座',
    dateRange: '5月21日 - 6月21日',
    element: '风象',
    ruler: '水星',
    personality: '聪明、灵活、好奇、善变',
    strengths: ['聪明', '灵活', '好奇', '善于沟通'],
    weaknesses: ['善变', '浮躁', '不可靠', '注意力分散'],
    career: '适合需要沟通和创意的工作，如记者、公关、教师',
    compatibility: ['天秤座', '水瓶座', '白羊座', '狮子座']
  },
  {
    name: '巨蟹座',
    dateRange: '6月22日 - 7月22日',
    element: '水象',
    ruler: '月亮',
    personality: '敏感、情绪化、爱家、保护性强',
    strengths: ['敏感', '情绪化', '爱家', '保护性强'],
    weaknesses: ['情绪化', '敏感', '占有欲强', '容易焦虑'],
    career: '适合需要关怀和照顾的工作，如医护人员、教育工作者、社会工作者',
    compatibility: ['双鱼座', '天蝎座', '金牛座', '处女座']
  },
  {
    name: '狮子座',
    dateRange: '7月23日 - 8月22日',
    element: '火象',
    ruler: '太阳',
    personality: '自信、热情、慷慨、骄傲',
    strengths: ['自信', '热情', '慷慨', '领导力'],
    weaknesses: ['骄傲', '自负', '控制欲强', '好面子'],
    career: '适合需要领导力和表现的工作，如演员、管理者、政治家',
    compatibility: ['白羊座', '射手座', '双子座', '天秤座']
  },
  {
    name: '处女座',
    dateRange: '8月23日 - 9月22日',
    element: '土象',
    ruler: '水星',
    personality: '细致、挑剔、务实、完美主义',
    strengths: ['细致', '挑剔', '务实', '完美主义'],
    weaknesses: ['挑剔', '完美主义', '焦虑', '过度分析'],
    career: '适合需要细致和精确的工作，如医生、科学家、编辑',
    compatibility: ['金牛座', '摩羯座', '巨蟹座', '双鱼座']
  },
  {
    name: '天秤座',
    dateRange: '9月23日 - 10月23日',
    element: '风象',
    ruler: '金星',
    personality: '优雅、平衡、公正、犹豫',
    strengths: ['优雅', '平衡', '公正', '外交能力'],
    weaknesses: ['犹豫', '优柔寡断', '依赖他人', '避免冲突'],
    career: '适合需要平衡和外交的工作，如律师、外交官、设计师',
    compatibility: ['双子座', '水瓶座', '狮子座', '射手座']
  },
  {
    name: '天蝎座',
    dateRange: '10月24日 - 11月21日',
    element: '水象',
    ruler: '冥王星',
    personality: '神秘、热情、执着、占有欲强',
    strengths: ['神秘', '热情', '执着', '洞察力'],
    weaknesses: ['占有欲强', '嫉妒', '报复心强', '神秘兮兮'],
    career: '适合需要深度和洞察力的工作，如侦探、心理学家、研究员',
    compatibility: ['双鱼座', '巨蟹座', '摩羯座', '金牛座']
  },
  {
    name: '射手座',
    dateRange: '11月22日 - 12月21日',
    element: '火象',
    ruler: '木星',
    personality: '乐观、自由、冒险、粗心',
    strengths: ['乐观', '自由', '冒险', '慷慨'],
    weaknesses: ['粗心', '冲动', '不切实际', '缺乏责任感'],
    career: '适合需要自由和冒险的工作，如旅行家、探险家、教师',
    compatibility: ['白羊座', '狮子座', '天秤座', '水瓶座']
  },
  {
    name: '摩羯座',
    dateRange: '12月22日 - 1月19日',
    element: '土象',
    ruler: '土星',
    personality: '务实、有责任感、耐心、严肃',
    strengths: ['务实', '有责任感', '耐心', '自律'],
    weaknesses: ['严肃', '固执', '悲观', '工作狂'],
    career: '适合需要责任感和纪律的工作，如管理者、工程师、建筑师',
    compatibility: ['金牛座', '处女座', '天蝎座', '双鱼座']
  },
  {
    name: '水瓶座',
    dateRange: '1月20日 - 2月18日',
    element: '风象',
    ruler: '天王星',
    personality: '独立、创新、理性、叛逆',
    strengths: ['独立', '创新', '理性', '人道主义'],
    weaknesses: ['叛逆', '冷漠', '固执', '不切实际'],
    career: '适合需要创新和独立的工作，如科学家、发明家、程序员',
    compatibility: ['双子座', '天秤座', '射手座', '白羊座']
  },
  {
    name: '双鱼座',
    dateRange: '2月19日 - 3月20日',
    element: '水象',
    ruler: '海王星',
    personality: '敏感、直觉、梦幻、情绪化',
    strengths: ['敏感', '直觉', '梦幻', '同情心'],
    weaknesses: ['情绪化', '梦幻', '缺乏现实感', '容易受影响'],
    career: '适合需要创意和同情心的工作，如艺术家、音乐家、医护人员',
    compatibility: ['巨蟹座', '天蝎座', '金牛座', '处女座']
  }
]

// 生成每日运势的函数
const generateHoroscope = (zodiac: string) => {
  const fortunes = [
    '今天是充满活力的一天，你会感到精力充沛，适合开展新的项目。',
    '今天你的创造力会达到高峰，不妨尝试一些新的创意活动。',
    '今天你可能会遇到一些挑战，但凭借你的智慧和勇气，你一定能够克服。',
    '今天是社交的好时机，你可能会遇到一些有趣的人，拓展你的人脉。',
    '今天你需要注意休息，不要过度劳累，保持良好的作息习惯。',
    '今天你的财务状况可能会有所改善，不妨考虑一些投资机会。',
    '今天你的感情生活可能会有一些变化，保持开放的心态，迎接新的可能。',
    '今天你可能会收到一些好消息，让你感到惊喜和开心。',
    '今天你需要关注自己的健康，保持良好的饮食习惯和运动习惯。',
    '今天你的工作效率会很高，适合处理一些重要的任务。'
  ]
  
  const randomIndex = Math.floor(Math.random() * fortunes.length)
  return fortunes[randomIndex]
}

// 根据出生日期获取星座
const getZodiac = (month: number, day: number) => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacs[0] // 白羊座
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacs[1] // 金牛座
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return zodiacs[2] // 双子座
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return zodiacs[3] // 巨蟹座
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacs[4] // 狮子座
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacs[5] // 处女座
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return zodiacs[6] // 天秤座
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return zodiacs[7] // 天蝎座
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacs[8] // 射手座
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacs[9] // 摩羯座
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacs[10] // 水瓶座
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return zodiacs[11] // 双鱼座
  return null
}

// 获取守护星图标
const getRulerIcon = (ruler: string) => {
  switch (ruler) {
    case '太阳': return Sun
    case '月亮': return Moon
    default: return Star
  }
}

export default function HoroscopeTest() {
  const [birthDate, setBirthDate] = useState('')
  const [zodiac, setZodiac] = useState<any>(null)
  const [horoscope, setHoroscope] = useState('')
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!birthDate) return

    const date = dayjs(birthDate)
    const month = date.month() + 1 // dayjs月份从0开始
    const day = date.date()

    const foundZodiac = getZodiac(month, day)
    if (foundZodiac) {
      setZodiac(foundZodiac)
      setHoroscope(generateHoroscope(foundZodiac.name))
      setShowResult(true)
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
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Star className="text-primary text-6xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">星座测试</h2>
            <p className="text-gray-600 dark:text-gray-400">输入你的出生日期，了解你的星座特点和每日运势</p>
          </div>

          {!showResult ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="birthDate" className="block text-sm font-medium mb-2">出生日期</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="birthDate"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  查看结果
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{zodiac?.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{zodiac?.dateRange}</p>
                  </div>
                  <Star className="text-primary text-4xl" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">元素</h4>
                    <p className="text-lg">{zodiac?.element}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">守护星</h4>
                    <div className="flex items-center">
                      {zodiac && (
                        <>
                          <Star className="text-primary" />
                          <span className="ml-2">{zodiac.ruler}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">性格特点</h4>
                  <p className="text-gray-700 dark:text-gray-300">{zodiac?.personality}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">优势</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {zodiac?.strengths.map((strength: string, index: number) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">待提升</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {zodiac?.weaknesses.map((weakness: string, index: number) => (
                        <li key={index}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">职业建议</h4>
                  <p className="text-gray-700 dark:text-gray-300">{zodiac?.career}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">匹配星座</h4>
                  <div className="flex flex-wrap gap-2">
                    {zodiac?.compatibility.map((sign: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold mb-4">今日运势</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{horoscope}</p>
                <button 
                  onClick={() => setHoroscope(generateHoroscope(zodiac?.name))}
                  className="btn btn-secondary"
                >
                  重新生成运势
                </button>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => {
                    setBirthDate('')
                    setZodiac(null)
                    setHoroscope('')
                    setShowResult(false)
                  }}
                  className="btn btn-primary"
                >
                  重新测试
                </button>
              </div>
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