import express from 'express'
import templateRouter from './templates'
import cors  from 'cors'
import path from 'path'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/v1/templates', templateRouter)
app.use('/static', express.static(path.join(__dirname, 'public')))
export default app