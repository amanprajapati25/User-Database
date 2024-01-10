import express from "express";
import { CORSS } from "./constants";
import cors from 'cors'
import cookieParser from "cookie-parser";  // To perform the CRUD operation on user cookies
import { urlencoded } from "body-parser";
const app = express();

app.use(cors({
    origin: CORSS,
    credential: true
}))

app.use(express.json({ limit: '16kb' }))  // To accept the json file data
app.use(urlencoded({ extended: true, limit: '16kb' }))  // To accept the data from browser(url) and extended: true means to can receive the object inside the object (nested objects)
app.use(express.static('public'))  // To store 
app.use(cookieParser( ))


// (req,res,err,next)  -->4