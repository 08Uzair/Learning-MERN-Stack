import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
const portNumber = 8800;
app.listen(portNumber,()=>{
    console.log(`SERVER IS RUNNING IN PORT ${portNumber}`)
})