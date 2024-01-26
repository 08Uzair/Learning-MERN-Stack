import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import { connectDatabase } from "./db/connection.js";
const app = express();
const portNumber = 8800;

connectDatabase();
app.listen(portNumber,()=>{
    console.log(`Server is Running on PORT ${portNumber}`)
})