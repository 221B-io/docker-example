import express from 'express'

const app = express()

app.get('/api', (req: express.Request, res: express.Response) => {
  res.send('Home page')
})

app.listen({ port: 8000 }, () => {
  console.log(`Server ready at http://localhost:${8000}`)
  console.log(process.cwd())
})