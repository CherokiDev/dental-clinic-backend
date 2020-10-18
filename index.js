const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('./middleware/cors');

//Importar las rutas
const usersRouter = require('./routers/userRouter');
const appointmentsRouter = require('./routers/appointmentRouter');

//Importar la configuración para la conexión a la base de datos en mongo atlas
const dbconnect = require('./config/dbconnect');
dbconnect();

//middleware
app.use(cors);
app.use(express.json());

//Endpoints
app.use('/users', usersRouter);
app.use('/appointments', appointmentsRouter);




app.listen(PORT, () => console.log('Serven running on port ' + PORT))