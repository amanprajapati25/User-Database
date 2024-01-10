import express from 'express';
const app = express();
import dotenv from 'dotenv'
import DBConnect from './src/db/index.js';

dotenv.config({
    path: './env'
})

DBConnect()
    .then(res => {
        app.listen(process.env.PORT || 5002, () => {
            console.log(`app is running on PORT-${process.env.PORT || 5002}`)
        })
    })
    .catch((err) => {
        console.error("Something went wrong")
    })
