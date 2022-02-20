const express = require('express');
const app = express();

//Define Routes
const userRouter = require('./src/routers/user');


app.use(express.json({extended: false}));

app.use(express.json());
app.use(userRouter);

app.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
})