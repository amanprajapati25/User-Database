import express from 'express';
const app = express();
import DBConnect from './src/db/index.js';

DBConnect();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});