import express from "express";
import { createUser } from "../controllers/User.js";
export const userRouter = express.Router();
userRouter.post("/add", createUser)