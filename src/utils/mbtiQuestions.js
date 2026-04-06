// MBTI测试问题数据
// 每个问题对应一个维度的测试：E/I, S/N, T/F, J/P
export const mbtiQuestions = [
  {
    id: 1,
    question: "在社交场合中，你更倾向于：",
    options: [
      { text: "主动与他人交流，喜欢成为焦点", value: "E" },
      { text: "观察周围环境，更喜欢倾听", value: "I" }
    ],
    dimension: "EI"
  },
  {
    id: 2,
    question: "当你学习新事物时，你更关注：",
    options: [
      { text: "具体的事实和细节", value: "S" },
      { text: "抽象的概念和可能性", value: "N" }
    ],
    dimension: "SN"
  },
  {
    id: 3,
    question: "做决策时，你更依赖：",
    options: [
      { text: "逻辑分析和客观事实", value: "T" },
      { text: "个人价值观和情感因素", value: "F" }
    ],
    dimension: "TF"
  },
  {
    id: 4,
    question: "你更喜欢：",
    options: [
      { text: "有计划、有条理的生活", value: "J" },
      { text: "灵活、随性的生活方式", value: "P" }
    ],
    dimension: "JP"
  },
  {
    id: 5,
    question: "在团队合作中，你更倾向于：",
    options: [
      { text: "积极参与讨论，表达自己的观点", value: "E" },
      { text: "思考后再发言，避免冲动表达", value: "I" }
    ],
    dimension: "EI"
  },
  {
    id: 6,
    question: "当你面对问题时，你更关注：",
    options: [
      { text: "当前的实际情况", value: "S" },
      { text: "未来的可能性和发展趋势", value: "N" }
    ],
    dimension: "SN"
  },
  {
    id: 7,
    question: "在与他人发生分歧时，你更倾向于：",
    options: [
      { text: "理性分析，寻找客观解决方案", value: "T" },
      { text: "考虑他人感受，寻求和谐", value: "F" }
    ],
    dimension: "TF"
  },
  {
    id: 8,
    question: "对于未完成的任务，你会：",
    options: [
      { text: "尽快完成，避免拖延", value: "J" },
      { text: "在截止日期前完成，享受过程", value: "P" }
    ],
    dimension: "JP"
  },
  {
    id: 9,
    question: "你更喜欢哪种工作环境：",
    options: [
      { text: "充满活力，与他人互动频繁", value: "E" },
      { text: "安静，有独立思考的空间", value: "I" }
    ],
    dimension: "EI"
  },
  {
    id: 10,
    question: "当你学习新技能时，你更倾向于：",
    options: [
      { text: "通过实际操作和经验学习", value: "S" },
      { text: "通过理论学习和思考理解", value: "N" }
    ],
    dimension: "SN"
  },
  {
    id: 11,
    question: "在评价他人时，你更看重：",
    options: [
      { text: "能力和效率", value: "T" },
      { text: "品德和人际关系", value: "F" }
    ],
    dimension: "TF"
  },
  {
    id: 12,
    question: "对于生活中的变化，你会：",
    options: [
      { text: "提前计划，做好准备", value: "J" },
      { text: "灵活应对，随机应变", value: "P" }
    ],
    dimension: "JP"
  }
];

// MBTI性格类型描述
export const mbtiTypes = {
  "ISTJ": {
    name: "检查员",
    description: "实际、逻辑、有条理，重视传统和规则。",
    strengths: ["可靠", "负责任", "逻辑思维", "注重细节"],
    weaknesses: ["固执", "不善于表达情感", "对变化适应较慢"]
  },
  "ISFJ": {
    name: "守护者",
    description: "温暖、有责任心、关注他人需求，重视和谐。",
    strengths: ["有同情心", "忠诚", "注重细节", "善于照顾他人"],
    weaknesses: ["过度牺牲自己", "避免冲突", "对批评敏感"]
  },
  "INFJ": {
    name: "咨询师",
    description: "富有洞察力、理想主义、关注他人成长，追求意义。",
    strengths: ["有洞察力", "富有同情心", "创造性", "坚定的价值观"],
    weaknesses: ["过于理想化", "难以表达情感", "对自己要求过高"]
  },
  "INTJ": {
    name: "策划者",
    description: "理性、战略思维、独立，追求知识和效率。",
    strengths: ["逻辑思维", "创造力", "独立思考", "目标导向"],
    weaknesses: ["过于批判性", "不善于表达情感", "对他人感受不够敏感"]
  },
  "ISTP": {
    name: "手艺人",
    description: "实际、灵活、善于解决问题，喜欢动手操作。",
    strengths: ["实际操作能力", "冷静应对危机", "适应性强", "善于分析"],
    weaknesses: ["冲动", "对规则不耐烦", "不善于长期规划"]
  },
  "ISFP": {
    name: "艺术家",
    description: "敏感、富有创造力、注重个人价值观，追求和谐。",
    strengths: ["创造力", "同情心", "适应性强", "注重当下"],
    weaknesses: ["避免冲突", "对批评敏感", "缺乏计划"]
  },
  "INFP": {
    name: "理想主义者",
    description: "富有创造力、价值观导向、关注个人成长，追求意义。",
    strengths: ["创造力", "同情心", "理想主义", "坚定的价值观"],
    weaknesses: ["过于理想化", "避免冲突", "对批评敏感"]
  },
  "INTP": {
    name: "思考者",
    description: "理性、好奇、善于分析，追求知识和逻辑。",
    strengths: ["逻辑思维", "创造力", "独立思考", "好奇心强"],
    weaknesses: ["过于批判性", "不善于表达情感", "对社交活动兴趣不大"]
  },
  "ESTP": {
    name: "创业者",
    description: "实际、外向、善于社交，喜欢冒险和挑战。",
    strengths: ["适应性强", "善于社交", "实际操作能力", "冷静应对危机"],
    weaknesses: ["冲动", "对规则不耐烦", "缺乏长期规划"]
  },
  "ESFP": {
    name: "表演者",
    description: "外向、热情、善于社交，喜欢享受生活。",
    strengths: ["善于社交", "热情", "适应性强", "注重当下"],
    weaknesses: ["冲动", "缺乏计划", "对批评敏感"]
  },
  "ENFP": {
    name: "倡导者",
    description: "热情、富有创造力、善于社交，追求意义和可能性。",
    strengths: ["创造力", "热情", "善于社交", "理想主义"],
    weaknesses: ["过于理想化", "缺乏计划", "对批评敏感"]
  },
  "ENTP": {
    name: "发明家",
    description: "好奇、善于分析、善于社交，喜欢挑战和创新。",
    strengths: ["创造力", "逻辑思维", "善于社交", "好奇心强"],
    weaknesses: ["过于批判性", "缺乏耐心", "对细节关注不够"]
  },
  "ESTJ": {
    name: "管理者",
    description: "实际、逻辑、有条理，善于组织和领导。",
    strengths: ["组织能力", "负责任", "逻辑思维", "果断"],
    weaknesses: ["固执", "对变化适应较慢", "对他人感受不够敏感"]
  },
  "ESFJ": {
    name: "照顾者",
    description: "外向、热情、有责任心，善于照顾他人。",
    strengths: ["有同情心", "善于社交", "负责任", "注重和谐"],
    weaknesses: ["过度牺牲自己", "避免冲突", "对批评敏感"]
  },
  "ENFJ": {
    name: "教导者",
    description: "热情、有洞察力、善于社交，关注他人成长。",
    strengths: ["有洞察力", "善于社交", "有同情心", "领导力"],
    weaknesses: ["过于理想化", "对批评敏感", "过度牺牲自己"]
  },
  "ENTJ": {
    name: "领导者",
    description: "理性、果断、有战略思维，善于组织和领导。",
    strengths: ["领导力", "战略思维", "果断", "逻辑思维"],
    weaknesses: ["过于批判性", "对他人感受不够敏感", "缺乏耐心"]
  }
};

// 计算MBTI类型
export const calculateMBTI = (answers) => {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };

  // 统计得分
  answers.forEach(answer => {
    scores[answer]++;
  });

  // 确定每个维度的倾向
  const E_or_I = scores.E > scores.I ? "E" : "I";
  const S_or_N = scores.S > scores.N ? "S" : "N";
  const T_or_F = scores.T > scores.F ? "T" : "F";
  const J_or_P = scores.J > scores.P ? "J" : "P";

  // 组合成MBTI类型
  return E_or_I + S_or_N + T_or_F + J_or_P;
};