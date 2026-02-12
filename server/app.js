import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from "./routes/auth.routes.js";

const app=express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes)


export default app;



