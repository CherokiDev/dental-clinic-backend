const mongoose = require('mongoose');
const uri = "mongodb+srv://Usuario1:12345Usuario1@cluster0.4luz4.mongodb.net/BaseDatos1?retryWrites=true&w=majority";



const dbconnect = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('Connection established with mongodb');
    }).catch(error => console.log('Error connecting to the database: ' + error));
}

module.exports = dbconnect;