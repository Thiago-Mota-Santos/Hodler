import { connectDatabase } from './mongo/database'
import { createServer } from 'http'
import { app } from './app'

(async () => {
  await connectDatabase()
  const PORT = process.env.PORT as unknown as number || 5666
  const server = createServer(app.callback())
  console.log(PORT)
  server.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running');
  });
})()
