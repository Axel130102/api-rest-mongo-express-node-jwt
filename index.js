import 'dotenv/config'
import './database/connectbd.js'
import express from 'express'
import authRouter from './routes/auth.route.js'

const app = express()

app.use(express.json())

app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 3000 //si existe se ocupa, pero si no se ocupa el puerto 3000 

app.listen(PORT, () => console.log('🔥🔥🔥 http://localhost:' + PORT))