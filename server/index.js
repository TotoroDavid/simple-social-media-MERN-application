import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
//routes
import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

//routes
app.use('/posts', postRoutes)

/**
 * mongoose connection
 * and server connection 
 */
const CONNECTION_URL = 'mongodb+srv://dave123:dave123@cluster0.7wtwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

