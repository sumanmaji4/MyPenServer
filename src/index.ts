import express, { Request, Response } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { dbConnect } from '../lib/dbConnect'
import { compilerRouter } from './routes/compilerRouter'

const app = express()
app.use(cors())
app.use(express.json())
config()

app.use('/compiler', compilerRouter)

dbConnect()
app.listen(8080, () => {
  console.log('Server is up n running..')
})
