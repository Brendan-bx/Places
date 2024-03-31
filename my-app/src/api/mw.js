import mongoose from 'mongoose'

export const mw = (handle) => async (req, res) => {
    try {
        // CONNECT
        await mongoose.connect(process.env.DATABASE_URL)

        await handle(req, res)
    } finally {
        await mongoose.disconnect()
    }
}
