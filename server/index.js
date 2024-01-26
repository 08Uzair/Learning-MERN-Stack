import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import { userRouter } from './routes/User.js'
import { connectDatabase } from "./db/connection.js";
const app = express();
const portNumber = 8800;

app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use("/user",userRouter)
connectDatabase();
app.listen(portNumber,()=>{
    console.log(`Server is Running on PORT ${portNumber}`)
})