const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const app = express();
const dotenv = require('dotenv').config();
app.use(express.json())
const port = process.env.PORT || 5000;
connectDb();
app.use('/api/contacts', require('./router/GetContactRouter'));
app.use(errorHandler);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
