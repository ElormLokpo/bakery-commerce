import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors({
  origin: [
    'https://your-nextjs-app.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true,
}))

app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/', (c) => {
  return c.json({ message: 'Hello from Hono on Render!' })
})


const port = parseInt(process.env.PORT || '10000')

Bun.serve({
  port,
  hostname: '0.0.0.0',
  fetch: app.fetch,
})

console.log(`Server running on http://0.0.0.0:${port}`)