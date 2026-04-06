'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Lock, Clock, QrCode, Wrench } from 'lucide-react'
import QRCode from 'qrcode'

// 工具类型
type ToolType = 'calculator' | 'password' | 'time' | 'qrcode'

export default function Tools() {
  const [activeTool, setActiveTool] = useState<ToolType>('calculator')

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
          <div className="text-center mb-8">
            <Wrench className="text-primary text-6xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">实用小工具</h2>
            <p className="text-gray-600 dark:text-gray-400">多种实用工具，满足你的日常需求</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              <button
                onClick={() => setActiveTool('calculator')}
                className={`px-4 py-3 font-medium border-b-2 ${activeTool === 'calculator' ? 'border-primary text-primary' : 'border-transparent hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                <div className="flex items-center">
                  <Calculator size={18} className="mr-2" />
                  计算器
                </div>
              </button>
              <button
                onClick={() => setActiveTool('password')}
                className={`px-4 py-3 font-medium border-b-2 ${activeTool === 'password' ? 'border-primary text-primary' : 'border-transparent hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                <div className="flex items-center">
                  <Lock size={18} className="mr-2" />
                  密码生成器
                </div>
              </button>
              <button
                onClick={() => setActiveTool('time')}
                className={`px-4 py-3 font-medium border-b-2 ${activeTool === 'time' ? 'border-primary text-primary' : 'border-transparent hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  时间转换
                </div>
              </button>
              <button
                onClick={() => setActiveTool('qrcode')}
                className={`px-4 py-3 font-medium border-b-2 ${activeTool === 'qrcode' ? 'border-primary text-primary' : 'border-transparent hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                <div className="flex items-center">
                  <QrCode size={18} className="mr-2" />
                  二维码生成器
                </div>
              </button>
            </div>

            <div className="py-4">
              {activeTool === 'calculator' && <CalculatorTool />}
              {activeTool === 'password' && <PasswordGeneratorTool />}
              {activeTool === 'time' && <TimeConverterTool />}
              {activeTool === 'qrcode' && <QRCodeGeneratorTool />}
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

// 计算器工具
function CalculatorTool() {
  const [display, setDisplay] = useState('0')
  const [currentValue, setCurrentValue] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [resetDisplay, setResetDisplay] = useState(false)

  const handleNumber = (num: string) => {
    if (display === '0' || resetDisplay) {
      setDisplay(num)
      setResetDisplay(false)
    } else {
      setDisplay(display + num)
    }
  }

  const handleOperator = (op: string) => {
    if (currentValue === null) {
      setCurrentValue(parseFloat(display))
    } else if (operator) {
      const result = calculate(currentValue, parseFloat(display), operator)
      setDisplay(result.toString())
      setCurrentValue(result)
    }
    setOperator(op)
    setResetDisplay(true)
  }

  const calculate = (a: number, b: number, op: string) => {
    switch (op) {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return a / b
      default: return b
    }
  }

  const handleEquals = () => {
    if (currentValue !== null && operator) {
      const result = calculate(currentValue, parseFloat(display), operator)
      setDisplay(result.toString())
      setCurrentValue(null)
      setOperator(null)
      setResetDisplay(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setCurrentValue(null)
    setOperator(null)
    setResetDisplay(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
        <div className="text-right text-2xl font-bold min-h-12">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button onClick={handleClear} className="btn btn-secondary">C</button>
        <button onClick={() => handleOperator('/')} className="btn btn-secondary">÷</button>
        <button onClick={() => handleOperator('*')} className="btn btn-secondary">×</button>
        <button onClick={() => handleOperator('-')} className="btn btn-secondary">−</button>
        <button onClick={() => handleNumber('7')} className="btn">7</button>
        <button onClick={() => handleNumber('8')} className="btn">8</button>
        <button onClick={() => handleNumber('9')} className="btn">9</button>
        <button onClick={() => handleOperator('+')} className="btn btn-secondary">+</button>
        <button onClick={() => handleNumber('4')} className="btn">4</button>
        <button onClick={() => handleNumber('5')} className="btn">5</button>
        <button onClick={() => handleNumber('6')} className="btn">6</button>
        <button onClick={handleEquals} className="btn btn-primary col-span-1 row-span-2">=</button>
        <button onClick={() => handleNumber('1')} className="btn">1</button>
        <button onClick={() => handleNumber('2')} className="btn">2</button>
        <button onClick={() => handleNumber('3')} className="btn">3</button>
        <button onClick={() => handleNumber('0')} className="btn col-span-2">0</button>
        <button onClick={() => handleNumber('.')} className="btn">.</button>
      </div>
    </div>
  )
}

// 密码生成器工具
function PasswordGeneratorTool() {
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let characterSet = ''
    if (includeUppercase) characterSet += uppercase
    if (includeLowercase) characterSet += lowercase
    if (includeNumbers) characterSet += numbers
    if (includeSymbols) characterSet += symbols

    if (characterSet.length === 0) {
      setPassword('请至少选择一种字符类型')
      return
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length)
      result += characterSet[randomIndex]
    }

    setPassword(result)
  }

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password)
      alert('密码已复制到剪贴板')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">密码长度</label>
        <div className="flex items-center">
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mr-4"
          />
          <span className="text-sm font-medium w-8">{length}</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mr-2"
          />
          包含大写字母 (A-Z)
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            className="mr-2"
          />
          包含小写字母 (a-z)
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2"
          />
          包含数字 (0-9)
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="mr-2"
          />
          包含特殊字符 (!@#$%^&*)
        </label>
      </div>

      <div>
        <button onClick={generatePassword} className="btn btn-primary w-full mb-4">
          生成密码
        </button>

        <div className="relative">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
          >
            复制
          </button>
        </div>
      </div>
    </div>
  )
}

// 时间转换工具
function TimeConverterTool() {
  const [seconds, setSeconds] = useState('')
  const [result, setResult] = useState('')

  const convertTime = () => {
    const totalSeconds = parseInt(seconds)
    if (isNaN(totalSeconds)) {
      setResult('请输入有效的秒数')
      return
    }

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const remainingSeconds = totalSeconds % 60

    let timeString = ''
    if (hours > 0) timeString += `${hours} 小时 `
    if (minutes > 0) timeString += `${minutes} 分钟 `
    if (remainingSeconds > 0) timeString += `${remainingSeconds} 秒`

    setResult(timeString || '0 秒')
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="seconds" className="block text-sm font-medium mb-2">输入秒数</label>
        <input
          type="number"
          id="seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="例如: 3661"
        />
      </div>

      <button onClick={convertTime} className="btn btn-primary w-full mb-4">
        转换时间
      </button>

      <div>
        <label className="block text-sm font-medium mb-2">转换结果</label>
        <div className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
          {result || '转换结果将显示在这里'}
        </div>
      </div>
    </div>
  )
}

// 二维码生成器工具
function QRCodeGeneratorTool() {
  const [text, setText] = useState('https://cloudtools.example.com')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(text)
      setQrCodeUrl(url)
    } catch (error) {
      console.error('生成二维码失败:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="qrText" className="block text-sm font-medium mb-2">输入文本或URL</label>
        <textarea
          id="qrText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
          placeholder="输入要生成二维码的文本或URL"
        ></textarea>
      </div>

      <button onClick={generateQRCode} className="btn btn-primary w-full mb-4">
        生成二维码
      </button>

      <div className="flex justify-center">
        {qrCodeUrl ? (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src={qrCodeUrl} alt="QR Code" className="max-w-full h-auto" />
          </div>
        ) : (
          <div className="bg-gray-100 dark:bg-gray-700 p-12 rounded-lg">
            <QrCode className="text-gray-400" size={128} />
            <p className="text-center text-gray-500 mt-4">二维码将显示在这里</p>
          </div>
        )}
      </div>
    </div>
  )
}