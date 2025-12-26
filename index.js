import express from 'express'
import routes from './router.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config.js'
import cors from 'cors'
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();

// Connect to Database
connectDB()

// Create a MongoClient with MongoClientOptions object to set the Stable API version

console.log('ENV varibale:', process.env.SECRET)
console.log('ENV variable:', process.env.MONGODB_URI)
console.log('ENV variable is:', process.env.PORT)

// const client = new MongoClient(uri,{
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true
//     }
// })

// async function connect(){
//     try {
//         // Connect the client to the server
//         await client.connect();
//         // Send a ping to confirm successful connection
//         await client.db("admin").command({ping: 1});
//         console.log("Pinged your deployment. You successfully connected to MongoDB!")
        
//     } finally {
//         // Ensure that the client will close when you finish/error
//         await client.close()
//     }
// }
// connect().catch(console.dir)

// await mongoose.connect(url, { dbName: 'AngularProject'})
//         .then(() => {
//             console.log('DB Connected')
//         })
//         .catch((err) => {
//             console.log(`DB Failed: ${err}`)
//         })

// Allow requests from localhost:4200

app.use(cors({
    origin: `http://localhost:4200`,
    credentials: true // set true if using cookies or auth headers.
}))

app.use(express.json())

// Add cookie Parser
app.use(cookieParser())

// Body parser
app.use(express.urlencoded({extended: false}))

app.use(routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is running on port http://localhost:${PORT}`)
})