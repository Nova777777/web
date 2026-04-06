import React, { useState } from 'react';
import { zodiacSigns, getZodiacSign, generateDailyHoroscope } from '../utils/horoscopeData';

const HoroscopeTest = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [zodiacInfo, setZodiacInfo] = useState(null);
  const [dailyFortune, setDailyFortune] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const monthNum = parseInt(month);
    const dayNum = parseInt(day);
    
    if (monthNum < 1 || monthNum > 12 || dayNum < 1 || dayNum > 31) {
      alert('请输入有效的出生日期');
      return;
    }

    const signName = getZodiacSign(monthNum, dayNum);
    const signInfo = zodiacSigns.find(sign => sign.name === signName);
    const fortune = generateDailyHoroscope(signName);

    setZodiacInfo(signInfo);
    setDailyFortune(fortune);
    setShowResult(true);
  };

  const handleReset = () => {
    setMonth('');
    setDay('');
    setZodiacInfo(null);
    setDailyFortune('');
    setShowResult(false);
  };

  return (
    <div className="section container">
      <h1 className="title">星座测试</h1>
      
      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">出生月份</label>
            <select 
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">请选择</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(monthNum => (
                <option key={monthNum} value={monthNum}>{monthNum}月</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">出生日期</label>
            <select 
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">请选择</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(dayNum => (
                <option key={dayNum} value={dayNum}>{dayNum}日</option>
              ))}
            </select>
          </div>
          
          <div className="flex space-x-4">
            <button 
              type="submit" 
              className="btn btn-primary flex-1"
            >
              查看结果
            </button>
            <button 
              type="button" 
              onClick={handleReset}
              className="btn border border-gray-300 flex-1"
            >
              重置
            </button>
          </div>
        </form>
      </div>

      {showResult && zodiacInfo && (
        <div className="card mt-8">
          <h2 className="text-2xl font-bold mb-4">{zodiacInfo.name}</h2>
          <p className="text-gray-500 mb-6">{zodiacInfo.dateRange}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="subtitle">基本信息</h3>
              <ul className="space-y-2">
                <li><strong>元素：</strong>{zodiacInfo.element}</li>
                <li><strong>守护星：</strong>{zodiacInfo.ruler}</li>
                <li><strong>幸运数字：</strong>{zodiacInfo.luckyNumbers.join(', ')}</li>
                <li><strong>幸运颜色：</strong>{zodiacInfo.luckyColors.join(', ')}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="subtitle">性格特点</h3>
              <div className="flex flex-wrap gap-2">
                {zodiacInfo.traits.map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="subtitle">星座描述</h3>
            <p className="text">{zodiacInfo.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="subtitle">今日运势</h3>
            <p className="text p-4 bg-yellow-50 rounded-lg">{dailyFortune}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="subtitle">职业建议</h3>
            <p className="text">{zodiacInfo.careerAdvice}</p>
          </div>
          
          <div>
            <h3 className="subtitle">匹配星座</h3>
            <div className="flex flex-wrap gap-2">
              {zodiacInfo.compatibility.map((sign, index) => (
                <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                  {sign}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoroscopeTest;