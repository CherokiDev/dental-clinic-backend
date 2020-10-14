const express = require('express');
const app = express();
const PORT = 3000;
const dbconnect = require('./config/dbconnect');
dbconnect();

app.use(express.json());






app.listen(PORT, () => console.log('Serven running on port ' + PORT) )