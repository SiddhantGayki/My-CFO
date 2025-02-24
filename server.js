const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./Config/connectDB');
// dotenv config
dotenv.config();

// rest object
const app = express();

//database call
connectDB();
// middleware 
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req,res) => {
    res.send("<h1>Hello Buddy</h1>");
});

//port 
const PORT = 9090 || process.env.PORT;

//listen 
app.listen(PORT, ()=> {
    console.log(`Server Running On Port ${PORT}`)
});