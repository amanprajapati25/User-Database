const express = require('express');
const app = express();
const { errorHandler } = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;
connectDb();
app.use('/api/contacts', require('./router/GetContactRouter'));
app.use('/api/user', require('./router/RegistrationRoutes'));

app.use(errorHandler);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
