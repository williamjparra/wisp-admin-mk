import 'dotenv/config'
import express from "express"
import cors from 'cors'
import { dbConnect } from './config/mongo';

const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

dbConnect()

app.listen(PORT, () => {console.log(`escuchando en el puerto ${PORT}`)})