const mongoose = require('mongoose');
const uri = "mongodb+srv://AdminCheroki:1q2w3e4r5t6y@cluster0.4luz4.mongodb.net/AppDentalClinic?retryWrites=true&w=majority";



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