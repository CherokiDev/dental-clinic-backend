const express = require('express');
const app = express();
const PORT = 3000;
const usersRouter = require('./routers/userRouter');

const dbconnect = require('./config/dbconnect');
dbconnect();

app.use(express.json());

app.use('/users', usersRouter);




app.listen(PORT, () => console.log('Serven running on port ' + PORT) )