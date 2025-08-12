import express from 'express'
import routes from './router.js'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import 'dotenv/config.js'
import cors from 'cors'

const app = express();

const url = 'mongodb://127.0.0.1:27017'

await mongoose.connect(url, { dbName: 'AngularProject'})
        .then(() => {
            console.log('DB Connected')
        })
        .catch((err) => {
            console.log(`DB Failed: ${err}`)
        })

// Allow requests from localhost:4200

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true // set true if using cookies or auth headers.
}))

app.use(express.json())

// Add cookie Parser
app.use(cookieParser())

// Body parser
app.use(express.urlencoded({extended: false}))

app.use(routes)

const port = 3000;

app.listen(port, () => {
    console.log(`App is running on port http://localhost:3000`)
})