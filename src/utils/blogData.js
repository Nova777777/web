// 博客文章数据
export const blogPosts = [
  {
    id: 1,
    title: "如何在Cloudflare Pages上部署React应用",
    content: "Cloudflare Pages是一个强大的静态网站托管平台，它提供了快速、安全、可靠的部署服务。本文将介绍如何在Cloudflare Pages上部署React应用，包括项目初始化、构建配置和部署流程。\n\n首先，我们需要创建一个React项目。可以使用Vite来快速初始化一个React项目：\n\n```bash\nnpm create vite@latest my-app -- --template react\n```\n\n然后，我们需要配置项目的构建选项，确保构建产物可以正确部署到Cloudflare Pages。在vite.config.js文件中，我们可以设置构建输出目录为dist：\n\n```javascript\nimport { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\nexport default defineConfig({\n  plugins: [react()],\n  build: {\n    outDir: 'dist'\n  }\n})\n```\n\n接下来，我们需要在Cloudflare Pages上创建一个新项目，并连接到我们的GitHub仓库。在部署配置中，我们需要设置构建命令为`npm run build`，构建输出目录为`dist`。\n\n最后，我们可以通过推送代码到GitHub仓库来触发自动部署。Cloudflare Pages会自动构建并部署我们的应用，生成一个可访问的URL。\n\n通过这种方式，我们可以快速、方便地在Cloudflare Pages上部署React应用，享受其提供的高性能和可靠性。",
    author: "Admin",
    date: "2024-01-15",
    category: "技术",
    tags: ["Cloudflare", "React", "部署"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cloudflare%20Pages%20deployment%20diagram%20with%20React%20app&image_size=landscape_16_9"
  },
  {
    id: 2,
    title: "MBTI性格测试的科学依据",
    content: "MBTI（Myers-Briggs Type Indicator）是一种基于卡尔·荣格的心理类型理论的人格评估工具。它将人的性格分为四个维度，每个维度有两个极端：\n\n1. 能量来源：外向（E） vs 内向（I）\n2. 信息获取：感觉（S） vs 直觉（N）\n3. 决策方式：思考（T） vs 情感（F）\n4. 生活方式：判断（J） vs 知觉（P）\n\n通过这四个维度的组合，MBTI可以将人的性格分为16种类型。每种类型都有其独特的特点和优势。\n\n虽然MBTI在心理学界存在一些争议，但其在职业规划、团队建设和个人发展方面仍然被广泛使用。它可以帮助人们更好地了解自己的性格特点，从而做出更适合自己的职业选择和生活决策。\n\n需要注意的是，MBTI只是一种工具，不能完全定义一个人。人的性格是复杂的，受到多种因素的影响。因此，我们应该将MBTI测试结果作为参考，而不是绝对的判断标准。",
    author: "Admin",
    date: "2024-01-10",
    category: "心理学",
    tags: ["MBTI", "性格测试", "心理学"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MBTI%20personality%20test%20infographic%20with%20four%20dimensions&image_size=landscape_16_9"
  },
  {
    id: 3,
    title: "星座与性格的关系",
    content: "星座学是一种古老的学问，它认为人的性格和命运与出生时的星座有关。虽然现代科学并没有证实星座与性格之间存在直接的因果关系，但许多人仍然对星座学感兴趣。\n\n在西方占星学中，黄道十二宫被分为12个星座，每个星座代表着不同的性格特点和命运趋势。例如，白羊座通常被认为是热情、勇敢、冲动的，而金牛座则被认为是稳重、务实、固执的。\n\n虽然星座学不能被视为科学，但它可以作为一种娱乐和自我探索的工具。通过了解自己的星座特点，人们可以更好地了解自己的性格倾向，从而在生活和工作中做出更适合自己的选择。\n\n需要强调的是，星座学只是一种参考，不能完全决定一个人的性格和命运。人的性格是由遗传、环境和个人经历等多种因素共同决定的，我们应该以科学的态度对待星座学。",
    author: "Admin",
    date: "2024-01-05",
    category: "占星学",
    tags: ["星座", "占星学", "性格"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zodiac%20signs%20circle%20with%20astrology%20symbols&image_size=landscape_16_9"
  },
  {
    id: 4,
    title: "前端开发的未来趋势",
    content: "前端开发是一个快速发展的领域，随着技术的不断进步，前端开发的趋势也在不断变化。以下是一些前端开发的未来趋势：\n\n1. **WebAssembly的广泛应用**：WebAssembly可以让高性能的代码在浏览器中运行，为前端开发带来更多可能性。\n\n2. **AI辅助开发**：AI工具可以帮助开发者更快速地编写代码，提高开发效率。\n\n3. **无代码/低代码开发**：无代码/低代码平台可以让非专业开发者也能构建复杂的Web应用。\n\n4. **响应式设计的进一步发展**：随着各种设备的普及，响应式设计将变得更加重要。\n\n5. **前端与后端的融合**：Full-Stack JavaScript开发将变得更加普遍，前端开发者需要了解更多后端知识。\n\n作为前端开发者，我们需要不断学习新的技术和工具，以适应这些变化。只有保持学习的态度，才能在这个快速发展的领域中保持竞争力。",
    author: "Admin",
    date: "2023-12-20",
    category: "技术",
    tags: ["前端开发", "未来趋势", "WebAssembly"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Frontend%20development%20future%20technology%20concept&image_size=landscape_16_9"
  }
];

// 获取所有博客文章
export const getBlogPosts = () => {
  return blogPosts;
};

// 根据ID获取博客文章
export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

// 根据分类获取博客文章
export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

// 根据标签获取博客文章
export const getBlogPostsByTag = (tag) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

// 搜索博客文章
export const searchBlogPosts = (keyword) => {
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(keyword.toLowerCase()) ||
    post.content.toLowerCase().includes(keyword.toLowerCase())
  );
};

// 获取所有分类
export const getCategories = () => {
  const categories = new Set();
  blogPosts.forEach(post => categories.add(post.category));
  return Array.from(categories);
};

// 获取所有标签
export const getTags = () => {
  const tags = new Set();
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
};