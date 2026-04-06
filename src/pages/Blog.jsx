import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { 
  getBlogPosts, 
  getBlogPostById, 
  getCategories, 
  getTags,
  getBlogPostsByCategory,
  getBlogPostsByTag,
  searchBlogPosts
} from '../utils/blogData';

// 博客列表组件
const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const keyword = searchParams.get('search');

    let filteredPosts = getBlogPosts();
    
    if (category) {
      filteredPosts = getBlogPostsByCategory(category);
    } else if (tag) {
      filteredPosts = getBlogPostsByTag(tag);
    } else if (keyword) {
      filteredPosts = searchBlogPosts(keyword);
      setSearchKeyword(keyword);
    }

    setPosts(filteredPosts);
    setCategories(getCategories());
    setTags(getTags());
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword) {
      setSearchParams({ search: searchKeyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="section container">
      <h1 className="title">个人博客</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 侧边栏 */}
        <div className="lg:col-span-1">
          {/* 搜索框 */}
          <div className="card mb-6">
            <h3 className="subtitle">搜索</h3>
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="搜索文章..."
                className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="btn btn-primary rounded-l-none"
              >
                搜索
              </button>
            </form>
          </div>

          {/* 分类 */}
          <div className="card mb-6">
            <h3 className="subtitle">分类</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setSearchParams({})}
                >
                  全部
                </Link>
              </li>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={`/blog?category=${category}`} 
                    className="text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setSearchParams({ category })}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 标签 */}
          <div className="card">
            <h3 className="subtitle">标签</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Link 
                  key={index}
                  to={`/blog?tag=${tag}`} 
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setSearchParams({ tag })}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 博客列表 */}
        <div className="lg:col-span-3">
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <div key={post.id} className="card">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">
                    <Link to={`/blog/${post.id}`} className="text-dark hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text mb-4">
                    {post.content.substring(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-primary hover:underline"
                    >
                      阅读更多
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card text-center py-12">
              <p className="text">没有找到相关文章</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 博客详情组件
const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const blogPost = getBlogPostById(id);
    setPost(blogPost);
  }, [id]);

  if (!post) {
    return (
      <div className="section container">
        <div className="card text-center py-12">
          <p className="text">文章不存在</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section container">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <h1 className="title">{post.title}</h1>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-80 object-cover rounded-lg my-6"
        />
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.startsWith('```') ? (
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{paragraph.replace(/```/g, '')}</code>
                </pre>
              ) : paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') || paragraph.startsWith('5.') ? (
                <li className="ml-6 mb-2">{paragraph}</li>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <Link 
            to="/blog" 
            className="btn btn-primary"
          >
            返回博客列表
          </Link>
        </div>
      </div>
    </div>
  );
};

// 博客路由组件
const Blog = () => {
  const { id } = useParams();
  
  if (id) {
    return <BlogDetail />;
  }
  
  return <BlogList />;
};

export default Blog;