const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors middleware
const app = express();
const mongoose = require("mongoose");
dotenv.config({ path: './config.env' });
require("./db/conn");

// Use the cors middleware
app.use(cors());

app.use(express.json());
app.use(require('./router/auth'));
app.use(require('./router/adminRoutes')); // Add this line to include the admin routes
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
