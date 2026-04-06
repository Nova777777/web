import React, { useState } from 'react';

// 计算器组件
const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (currentValue === null) {
      setCurrentValue(inputValue);
    } else if (operator) {
      const result = calculate(currentValue, inputValue, operator);
      setDisplay(String(result));
      setCurrentValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    if (operator && currentValue !== null) {
      const result = calculate(currentValue, parseFloat(display), operator);
      setDisplay(String(result));
      setCurrentValue(result);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="card">
      <h3 className="subtitle mb-4">计算器</h3>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <div className="text-right text-xl font-mono">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button 
          onClick={handleClear} 
          className="btn border border-gray-300 col-span-1"
        >
          C
        </button>
        <button 
          onClick={() => handleDigit('.')} 
          className="btn border border-gray-300"
        >
          .
        </button>
        <button 
          onClick={() => handleOperator('/')} 
          className="btn border border-gray-300 bg-gray-100"
        >
          ÷
        </button>
        <button 
          onClick={() => handleOperator('*')} 
          className="btn border border-gray-300 bg-gray-100"
        >
          ×
        </button>
        <button 
          onClick={() => handleDigit('7')} 
          className="btn border border-gray-300"
        >
          7
        </button>
        <button 
          onClick={() => handleDigit('8')} 
          className="btn border border-gray-300"
        >
          8
        </button>
        <button 
          onClick={() => handleDigit('9')} 
          className="btn border border-gray-300"
        >
          9
        </button>
        <button 
          onClick={() => handleOperator('-')} 
          className="btn border border-gray-300 bg-gray-100"
        >
          -
        </button>
        <button 
          onClick={() => handleDigit('4')} 
          className="btn border border-gray-300"
        >
          4
        </button>
        <button 
          onClick={() => handleDigit('5')} 
          className="btn border border-gray-300"
        >
          5
        </button>
        <button 
          onClick={() => handleDigit('6')} 
          className="btn border border-gray-300"
        >
          6
        </button>
        <button 
          onClick={() => handleOperator('+')} 
          className="btn border border-gray-300 bg-gray-100"
        >
          +
        </button>
        <button 
          onClick={() => handleDigit('1')} 
          className="btn border border-gray-300"
        >
          1
        </button>
        <button 
          onClick={() => handleDigit('2')} 
          className="btn border border-gray-300"
        >
          2
        </button>
        <button 
          onClick={() => handleDigit('3')} 
          className="btn border border-gray-300"
        >
          3
        </button>
        <button 
          onClick={handleEquals} 
          className="btn border border-gray-300 bg-primary text-white row-span-2"
        >
          =
        </button>
        <button 
          onClick={() => handleDigit('0')} 
          className="btn border border-gray-300 col-span-3"
        >
          0
        </button>
      </div>
    </div>
  );
};

// 倒计时器组件
const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [inputTime, setInputTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleInputChange = (e, unit) => {
    const value = parseInt(e.target.value) || 0;
    setInputTime(prev => ({ ...prev, [unit]: value }));
  };

  const startTimer = () => {
    if (inputTime.hours === 0 && inputTime.minutes === 0 && inputTime.seconds === 0) {
      alert('请设置倒计时时间');
      return;
    }

    setTime(inputTime);
    setIsActive(true);

    const id = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(intervalId);
          setIsActive(false);
          alert('倒计时结束！');
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIsActive(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setInputTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="card">
      <h3 className="subtitle mb-4">倒计时器</h3>
      <div className="text-center mb-6">
        <div className="text-4xl font-mono mb-4">
          {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">小时</label>
            <input
              type="number"
              min="0"
              max="99"
              value={inputTime.hours}
              onChange={(e) => handleInputChange(e, 'hours')}
              disabled={isActive}
              className="w-16 px-2 py-2 border rounded-lg text-center"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">分钟</label>
            <input
              type="number"
              min="0"
              max="59"
              value={inputTime.minutes}
              onChange={(e) => handleInputChange(e, 'minutes')}
              disabled={isActive}
              className="w-16 px-2 py-2 border rounded-lg text-center"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">秒</label>
            <input
              type="number"
              min="0"
              max="59"
              value={inputTime.seconds}
              onChange={(e) => handleInputChange(e, 'seconds')}
              disabled={isActive}
              className="w-16 px-2 py-2 border rounded-lg text-center"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          {!isActive ? (
            <button 
              onClick={startTimer} 
              className="btn btn-primary"
            >
              开始
            </button>
          ) : (
            <button 
              onClick={stopTimer} 
              className="btn btn-secondary"
            >
              暂停
            </button>
          )}
          <button 
            onClick={resetTimer} 
            className="btn border border-gray-300"
          >
            重置
          </button>
        </div>
      </div>
    </div>
  );
};

// 单位转换器组件
const UnitConverter = () => {
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [value, setValue] = useState('0');
  const [result, setResult] = useState('0');

  const units = {
    meter: { name: '米', factor: 1 },
    kilometer: { name: '千米', factor: 0.001 },
    centimeter: { name: '厘米', factor: 100 },
    millimeter: { name: '毫米', factor: 1000 },
    mile: { name: '英里', factor: 0.000621371 },
    foot: { name: '英尺', factor: 3.28084 },
    inch: { name: '英寸', factor: 39.3701 }
  };

  const handleConvert = () => {
    const inputValue = parseFloat(value) || 0;
    const fromFactor = units[fromUnit].factor;
    const toFactor = units[toUnit].factor;
    const convertedValue = (inputValue * fromFactor) / toFactor;
    setResult(convertedValue.toFixed(4));
  };

  return (
    <div className="card">
      <h3 className="subtitle mb-4">单位转换器</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">输入值</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">从</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {Object.entries(units).map(([key, unit]) => (
                <option key={key} value={key}>{unit.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">到</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {Object.entries(units).map(([key, unit]) => (
                <option key={key} value={key}>{unit.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button 
          onClick={handleConvert} 
          className="btn btn-primary w-full"
        >
          转换
        </button>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">结果</label>
          <input
            type="text"
            value={result}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
};

// 随机密码生成器组件
const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let charSet = '';
    if (includeUppercase) charSet += uppercase;
    if (includeLowercase) charSet += lowercase;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    if (charSet.length === 0) {
      alert('请至少选择一种字符类型');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('密码已复制到剪贴板');
    }
  };

  return (
    <div className="card">
      <h3 className="subtitle mb-4">随机密码生成器</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">密码长度</label>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-sm text-gray-500">{length} 字符</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            <label>包含大写字母 (A-Z)</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="mr-2"
            />
            <label>包含小写字母 (a-z)</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            <label>包含数字 (0-9)</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            <label>包含特殊字符 (!@#$%^&*)</label>
          </div>
        </div>
        <button 
          onClick={generatePassword} 
          className="btn btn-primary w-full"
        >
          生成密码
        </button>
        <div className="flex">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
          />
          <button 
            onClick={copyToClipboard}
            className="btn btn-primary rounded-l-none"
          >
            复制
          </button>
        </div>
      </div>
    </div>
  );
};

// 小工具集合组件
const Tools = () => {
  const [activeTool, setActiveTool] = useState('calculator');

  const tools = [
    { id: 'calculator', name: '计算器' },
    { id: 'countdown', name: '倒计时器' },
    { id: 'converter', name: '单位转换器' },
    { id: 'password', name: '密码生成器' }
  ];

  return (
    <div className="section container">
      <h1 className="title">小工具</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 工具导航 */}
        <div className="md:col-span-1">
          <div className="card">
            <h3 className="subtitle mb-4">工具列表</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.id}>
                  <button
                    onClick={() => setActiveTool(tool.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTool === tool.id ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    {tool.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 工具内容 */}
        <div className="md:col-span-3">
          {activeTool === 'calculator' && <Calculator />}
          {activeTool === 'countdown' && <CountdownTimer />}
          {activeTool === 'converter' && <UnitConverter />}
          {activeTool === 'password' && <PasswordGenerator />}
        </div>
      </div>
    </div>
  );
};

export default Tools;