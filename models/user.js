const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    lastname: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Campo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Campo obligatorio'],
        minlength: [6, 'Requerido 6 caracteres mínimo']
    },
    phone: {
        type: Number
    },
    photo: {
        type: String
    },
    birthdate: {
        type: String
    },
    address: {
        type: Number
    }
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;