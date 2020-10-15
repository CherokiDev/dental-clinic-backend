const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('./mw/cors');

const usersRouter = require('./routers/userRouter');
const appointmentRouter = require('./routers/appointmentRouter');

const dbconnect = require('./config/dbconnect');
dbconnect();

app.use(express.json());
app.use(cors);

app.use('/users', usersRouter);
app.use('/appointments', appointmentRouter);




app.listen(PORT, () => console.log('Serven running on port ' + PORT))