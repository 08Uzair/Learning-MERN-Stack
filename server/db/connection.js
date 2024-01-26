import mongoose from "mongoose";

const URI = "mongodb+srv://mern2024:mern2024@cluster0.cklbgsr.mongodb.net/?retryWrites=true&w=majority"

export const connectDatabase = async ()=>{
try 
{
    await mongoose.connect(URI);
    console.log("Connected to Database")
}
catch (error)
{
    console.log(error)
}
}