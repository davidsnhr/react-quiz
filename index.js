const express = require('express');
const connectDB = require("./src/db/mongoose");
const { config } = require("./src/config/index");

const app = express();

connectDB();

//Define Routes
const userRouter = require('./src/routers/user');


app.use(express.json({extended: false}));

app.use(express.json());
app.use(userRouter);

app.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
})