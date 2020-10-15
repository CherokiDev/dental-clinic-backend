const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    status: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    date: {
        type: Date,
        required: [true, 'Campo obligatorio']
    },
    time: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    observations: {
        type: String
    }
})

const AppointmentModel = mongoose.model('appointment', AppointmentSchema);

module.exports = AppointmentModel;