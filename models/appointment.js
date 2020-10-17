const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'canceled', 'expired'],
        required: [true, 'Campo obligatorio']
    },
    date: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    observations: {
        type: String
    },
    token_user: {
        type: String,
        required: true
    }
})

const AppointmentModel = mongoose.model('appointment', AppointmentSchema);

module.exports = AppointmentModel;