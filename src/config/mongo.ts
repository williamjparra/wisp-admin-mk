import 'dotenv/config'
import { connect } from 'mongoose'

const dbConnect = async () => {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
}

export { dbConnect }

