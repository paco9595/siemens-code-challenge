import express from 'express'
import templateRouter from './templates'
import cors  from 'cors'
import path from 'node:path'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/images', templateRouter)
app.use('/static', express.static(path.join(__dirname, 'public')))
export default app