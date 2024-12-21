import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
express.urlencoded({ extended: true })
import { AppRouter } from './WebRouter'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

AppRouter(app)
const port = process?.env?.PORT ?? 3000 //Mac dinh post la 3000
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})