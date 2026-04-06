import React, { useState } from 'react';
import { mbtiQuestions, mbtiTypes, calculateMBTI } from '../utils/mbtiQuestions';

const MBTITest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [mbtiType, setMbtiType] = useState('');

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < mbtiQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateMBTI(newAnswers);
      setMbtiType(result);
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setMbtiType('');
  };

  if (showResults) {
    const typeInfo = mbtiTypes[mbtiType];
    return (
      <div className="section container">
        <h1 className="title">MBTI测试结果</h1>
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">{mbtiType} - {typeInfo.name}</h2>
          <p className="text mb-6">{typeInfo.description}</p>
          
          <div className="mb-6">
            <h3 className="subtitle">优势</h3>
            <ul className="list-disc pl-5 space-y-2">
              {typeInfo.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="subtitle">待提升</h3>
            <ul className="list-disc pl-5 space-y-2">
              {typeInfo.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>
          
          <button 
            className="btn btn-primary w-full"
            onClick={handleRestart}
          >
            重新测试
          </button>
        </div>
      </div>
    );
  }

  const question = mbtiQuestions[currentQuestion];
  return (
    <div className="section container">
      <h1 className="title">MBTI性格测试</h1>
      <div className="card">
        <div className="mb-4 text-sm text-gray-500">
          问题 {currentQuestion + 1} / {mbtiQuestions.length}
        </div>
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MBTITest;