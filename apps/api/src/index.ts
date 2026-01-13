
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()


app.use('/*', cors({
  origin: ['https://your-nextjs-app.vercel.app', 'http://localhost:3000'],
}))

app.get('/', (c) => {
  return c.json({ message: 'Hello from Hono + Bun!' })
})

app.get('/api/health', (c) => {
  return c.json({ status: 'healthy' })
})


export default {
  port: process.env.PORT || 8080,
  fetch: app.fetch,
}