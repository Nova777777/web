import { Router } from 'itty-router'

// 创建路由实例
const router = Router()

// 初始化数据库表结构
async function initDatabase(db) {
  try {
    // 创建博客表
    await db.exec(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category TEXT,
        tags TEXT
      );
    `)

    // 创建记事本表
    await db.exec(`
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category TEXT
      );
    `)
  } catch (error) {
    console.error('初始化数据库失败:', error)
  }
}

// 博客API端点
router.get('/api/blogs', async (request, env) => {
  try {
    await initDatabase(env.DB)
    const { results } = await env.DB.prepare('SELECT * FROM blogs ORDER BY created_at DESC').all()
    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.get('/api/blogs/:id', async (request, env) => {
  try {
    const { id } = request.params
    const { results } = await env.DB.prepare('SELECT * FROM blogs WHERE id = ?').bind(id).all()
    if (results.length === 0) {
      return new Response(JSON.stringify({ error: '博客不存在' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    return new Response(JSON.stringify(results[0]), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.post('/api/blogs', async (request, env) => {
  try {
    const body = await request.json()
    const { title, content, category, tags } = body
    
    if (!title || !content) {
      return new Response(JSON.stringify({ error: '标题和内容不能为空' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    await initDatabase(env.DB)
    const { results } = await env.DB.prepare(
      'INSERT INTO blogs (title, content, category, tags) VALUES (?, ?, ?, ?) RETURNING *'
    ).bind(title, content, category, tags).all()

    return new Response(JSON.stringify(results[0]), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.put('/api/blogs/:id', async (request, env) => {
  try {
    const { id } = request.params
    const body = await request.json()
    const { title, content, category, tags } = body
    
    if (!title || !content) {
      return new Response(JSON.stringify({ error: '标题和内容不能为空' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    await initDatabase(env.DB)
    const { results } = await env.DB.prepare(
      'UPDATE blogs SET title = ?, content = ?, category = ?, tags = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? RETURNING *'
    ).bind(title, content, category, tags, id).all()

    if (results.length === 0) {
      return new Response(JSON.stringify({ error: '博客不存在' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify(results[0]), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.delete('/api/blogs/:id', async (request, env) => {
  try {
    const { id } = request.params
    await initDatabase(env.DB)
    const { results } = await env.DB.prepare('DELETE FROM blogs WHERE id = ? RETURNING *').bind(id).all()
    
    if (results.length === 0) {
      return new Response(JSON.stringify({ error: '博客不存在' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ message: '博客删除成功' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

// 记事本API端点
router.get('/api/notes', async (request, env) => {
  try {
    await initDatabase(env.DB)
    const { results } = await env.DB.prepare('SELECT * FROM notes ORDER BY updated_at DESC').all()
    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.get('/api/notes/:id', async (request, env) => {
  try {
    const { id } = request.params
    const { results } = await env.DB.prepare('SELECT * FROM notes WHERE id = ?').bind(id).all()
    if (results.length === 0) {
      return new Response(JSON.stringify({ error: '笔记不存在' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    return new Response(JSON.stringify(results[0]), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.post('/api/notes', async (request, env) => {
  try {
    const body = await request.json()
    const { title, content, category } = body
    
    if (!title || !content) {
      return new Response(JSON.stringify({ error: '标题和内容不能为空' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    await initDatabase(env.DB)
    const { results } = await env.DB.prepare(
      'INSERT INTO notes (title, content, category) VALUES (?, ?, ?) RETURNING *'
    ).bind(title, content, category).all()

    return new Response(JSON.stringify(results[0]), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.put('/api/notes/:id', async (request, env) => {
  try {
    const { id } = request.params
    const body = await request.json()
    const { title, content, category } = body
    
    if (!title || !content) {
      return new Response(JSON.stringify({ error: '标题和内容不能为空' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    await initDatabase(env.DB)
    const { results } = await env.DB.prepare(
      'UPDATE notes SET title = ?, content = ?, category = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? RETURNING *'
    ).bind(title, content, category, id).all()

    if (results.length === 0) {
      return new Response(JSON.stringify({ error: '笔记不存在' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify(results[0]), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

router.delete('/api/notes/:id', async (request, env) => {
  try {
    const { id } = request.params
    await initDatabase(env.DB)
    const { results } = await env.DB.prepare('DELETE FROM notes WHERE id = ? RETURNING *').bind(id).all()
    
    if (results.length === 0) {
      return new Response(JSON.stringify({ error: '笔记不存在' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ message: '笔记删除成功' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

// 根路径
router.get('/', () => {
  return new Response('CloudTools API', {
    headers: { 'Content-Type': 'text/plain' }
  })
})

// 404处理
router.all('*', () => {
  return new Response('Not Found', {
    status: 404,
    headers: { 'Content-Type': 'text/plain' }
  })
})

// 导出Worker函数
export default {
  fetch: async (request, env, ctx) => {
    // CORS中间件
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }

    if (request.method === 'OPTIONS') {
      return new Response('OK', {
        headers: corsHeaders
      })
    }

    const response = await router.handle(request, env, ctx)
    
    // 添加CORS头
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value)
    })

    return response
  }
}
