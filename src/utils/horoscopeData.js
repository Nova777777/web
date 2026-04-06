// 星座数据
export const zodiacSigns = [
  {
    id: 1,
    name: "白羊座",
    dateRange: "3月21日 - 4月19日",
    element: "火象",
    ruler: "火星",
    traits: ["热情", "勇敢", "冲动", "自信", "积极"],
    description: "白羊座是黄道十二宫的第一宫，代表着新生和开始。白羊座的人充满活力，勇于冒险，喜欢挑战，是天生的领导者。他们性格直率，做事冲动，但充满热情和动力。",
    compatibility: ["狮子座", "射手座", "双子座", "水瓶座"],
    luckyNumbers: [1, 3, 9],
    luckyColors: ["红色", "橙色"],
    careerAdvice: "适合需要创造力和领导力的工作，如企业家、运动员、销售人员等。"
  },
  {
    id: 2,
    name: "金牛座",
    dateRange: "4月20日 - 5月20日",
    element: "土象",
    ruler: "金星",
    traits: ["稳重", "务实", "固执", "忠诚", "物质"],
    description: "金牛座是黄道十二宫的第二宫，代表着稳定和物质。金牛座的人性格稳重，做事踏实，重视物质享受，对感情忠诚。他们有时会显得固执，但也因此更加可靠。",
    compatibility: ["处女座", "摩羯座", "巨蟹座", "双鱼座"],
    luckyNumbers: [2, 6, 8],
    luckyColors: ["绿色", "棕色"],
    careerAdvice: "适合需要耐心和细致的工作，如财务、艺术、农业等。"
  },
  {
    id: 3,
    name: "双子座",
    dateRange: "5月21日 - 6月21日",
    element: "风象",
    ruler: "水星",
    traits: ["聪明", "灵活", "善变", "好奇", "善于沟通"],
    description: "双子座是黄道十二宫的第三宫，代表着沟通和变化。双子座的人聪明伶俐，善于沟通，好奇心强，喜欢尝试新事物。他们思维敏捷，但有时会显得善变和不够专注。",
    compatibility: ["天秤座", "水瓶座", "白羊座", "狮子座"],
    luckyNumbers: [3, 5, 7],
    luckyColors: ["黄色", "蓝色"],
    careerAdvice: "适合需要沟通和创意的工作，如记者、销售、教育等。"
  },
  {
    id: 4,
    name: "巨蟹座",
    dateRange: "6月22日 - 7月22日",
    element: "水象",
    ruler: "月亮",
    traits: ["敏感", "温柔", "顾家", "情绪化", "有同情心"],
    description: "巨蟹座是黄道十二宫的第四宫，代表着家庭和情感。巨蟹座的人情感丰富，善于照顾他人，重视家庭。他们有时会显得情绪化，但也因此更加善解人意。",
    compatibility: ["天蝎座", "双鱼座", "金牛座", "处女座"],
    luckyNumbers: [2, 4, 7],
    luckyColors: ["白色", "银色"],
    careerAdvice: "适合需要爱心和耐心的工作，如医疗、教育、社会工作等。"
  },
  {
    id: 5,
    name: "狮子座",
    dateRange: "7月23日 - 8月22日",
    element: "火象",
    ruler: "太阳",
    traits: ["自信", "热情", "慷慨", "骄傲", "领导力"],
    description: "狮子座是黄道十二宫的第五宫，代表着创造力和自我表达。狮子座的人自信满满，热情大方，喜欢成为焦点，具有领导才能。他们有时会显得骄傲，但也因此更加勇敢和有担当。",
    compatibility: ["白羊座", "射手座", "双子座", "天秤座"],
    luckyNumbers: [1, 5, 9],
    luckyColors: ["金色", "橙色"],
    careerAdvice: "适合需要表现力和领导力的工作，如演员、管理者、政治家等。"
  },
  {
    id: 6,
    name: "处女座",
    dateRange: "8月23日 - 9月22日",
    element: "土象",
    ruler: "水星",
    traits: ["细致", "完美主义", "挑剔", "务实", "聪明"],
    description: "处女座是黄道十二宫的第六宫，代表着服务和健康。处女座的人做事细致，追求完美，注重细节，善于分析。他们有时会显得挑剔，但也因此更加可靠和高效。",
    compatibility: ["金牛座", "摩羯座", "巨蟹座", "双鱼座"],
    luckyNumbers: [3, 6, 8],
    luckyColors: ["灰色", "蓝色"],
    careerAdvice: "适合需要细致和专业的工作，如医生、工程师、会计师等。"
  },
  {
    id: 7,
    name: "天秤座",
    dateRange: "9月23日 - 10月23日",
    element: "风象",
    ruler: "金星",
    traits: ["优雅", "公正", "和谐", "犹豫", "善于社交"],
    description: "天秤座是黄道十二宫的第七宫，代表着平衡和关系。天秤座的人追求和谐，善于社交，注重公正，有审美眼光。他们有时会显得犹豫，但也因此更加理性和客观。",
    compatibility: ["双子座", "水瓶座", "狮子座", "射手座"],
    luckyNumbers: [6, 9, 15],
    luckyColors: ["粉色", "蓝色"],
    careerAdvice: "适合需要协调和社交的工作，如律师、设计师、公关等。"
  },
  {
    id: 8,
    name: "天蝎座",
    dateRange: "10月24日 - 11月21日",
    element: "水象",
    ruler: "冥王星",
    traits: ["神秘", "热情", "占有欲强", "直觉强", "意志力强"],
    description: "天蝎座是黄道十二宫的第八宫，代表着转变和深度。天蝎座的人性格神秘，情感强烈，直觉敏锐，意志力强。他们有时会显得占有欲强，但也因此更加专注和执着。",
    compatibility: ["巨蟹座", "双鱼座", "金牛座", "处女座"],
    luckyNumbers: [4, 7, 13],
    luckyColors: ["黑色", "深红色"],
    careerAdvice: "适合需要深度和专注的工作，如心理学家、侦探、研究员等。"
  },
  {
    id: 9,
    name: "射手座",
    dateRange: "11月22日 - 12月21日",
    element: "火象",
    ruler: "木星",
    traits: ["乐观", "自由", "冒险", "直爽", "哲学"],
    description: "射手座是黄道十二宫的第九宫，代表着探索和哲学。射手座的人性格乐观，喜欢自由，勇于冒险，思想开放。他们有时会显得冲动，但也因此更加热情和有活力。",
    compatibility: ["白羊座", "狮子座", "双子座", "天秤座"],
    luckyNumbers: [3, 9, 12],
    luckyColors: ["紫色", "深蓝色"],
    careerAdvice: "适合需要探索和创意的工作，如旅行家、教师、哲学家等。"
  },
  {
    id: 10,
    name: "摩羯座",
    dateRange: "12月22日 - 1月19日",
    element: "土象",
    ruler: "土星",
    traits: ["稳重", "务实", "有责任感", "固执", "目标明确"],
    description: "摩羯座是黄道十二宫的第十宫，代表着事业和成就。摩羯座的人性格稳重，做事务实，有责任感，目标明确。他们有时会显得严肃，但也因此更加可靠和有担当。",
    compatibility: ["金牛座", "处女座", "巨蟹座", "双鱼座"],
    luckyNumbers: [4, 8, 10],
    luckyColors: ["深棕色", "黑色"],
    careerAdvice: "适合需要责任和毅力的工作，如管理者、工程师、科学家等。"
  },
  {
    id: 11,
    name: "水瓶座",
    dateRange: "1月20日 - 2月18日",
    element: "风象",
    ruler: "天王星",
    traits: ["独立", "创新", "理性", "叛逆", "人道主义"],
    description: "水瓶座是黄道十二宫的第十一宫，代表着创新和人道主义。水瓶座的人性格独立，思想开放，富有创新精神，关注社会问题。他们有时会显得叛逆，但也因此更加独特和有创意。",
    compatibility: ["双子座", "天秤座", "白羊座", "狮子座"],
    luckyNumbers: [4, 7, 11],
    luckyColors: ["青色", "紫色"],
    careerAdvice: "适合需要创新和独立的工作，如发明家、设计师、社会工作者等。"
  },
  {
    id: 12,
    name: "双鱼座",
    dateRange: "2月19日 - 3月20日",
    element: "水象",
    ruler: "海王星",
    traits: ["敏感", "梦幻", "富有同情心", "直觉强", "艺术气质"],
    description: "双鱼座是黄道十二宫的第十二宫，代表着梦想和潜意识。双鱼座的人性格敏感，富有想象力，善于共情，有艺术气质。他们有时会显得梦幻，但也因此更加善良和有创造力。",
    compatibility: ["巨蟹座", "天蝎座", "金牛座", "处女座"],
    luckyNumbers: [3, 7, 12],
    luckyColors: ["蓝色", "绿色"],
    careerAdvice: "适合需要创意和共情的工作，如艺术家、作家、心理咨询师等。"
  }
];

// 根据生日确定星座
export const getZodiacSign = (month, day) => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "白羊座";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "金牛座";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return "双子座";
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return "巨蟹座";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "狮子座";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "处女座";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return "天秤座";
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return "天蝎座";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "射手座";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "摩羯座";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "水瓶座";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "双鱼座";
};

// 生成每日运势
export const generateDailyHoroscope = (zodiacSign) => {
  const fortunes = [
    "今天是充满机遇的一天，你会遇到一些新的挑战，但只要保持积极的态度，就能顺利解决。",
    "今天你的人际关系会很顺利，可能会遇到一些志同道合的朋友，或者与老朋友重聚。",
    "今天你的工作会很顺利，可能会得到上级的认可，或者完成一些重要的任务。",
    "今天你的财运会很好，可能会有一些意外的收入，或者投资得到回报。",
    "今天你的健康状况会很好，建议多进行一些户外活动，呼吸新鲜空气。",
    "今天你的感情会很顺利，可能会遇到心仪的对象，或者与伴侣关系更加亲密。",
    "今天你会有一些新的想法，建议记录下来，可能会成为你未来的发展方向。",
    "今天你会遇到一些困难，但只要保持冷静，就能找到解决办法。"
  ];
  
  // 简单的随机生成运势，实际应用中可以根据星座和日期生成更个性化的运势
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
};