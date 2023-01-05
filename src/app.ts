import 'dotenv/config'
import express from "express"
import cors from 'cors'

const PORT = process.env.PORT || 3001;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {console.log(`escuchando en el puerto ${PORT}`)})