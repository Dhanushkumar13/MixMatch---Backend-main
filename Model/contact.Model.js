const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = mongoose.Schema({
    contactName:{
        type: String,
        required: true,
    },
    contactEmail:{
        type: String,
        required: true,
    },
    contactSubject:{
        type: String,
        required: true,
    },
    contactMessage: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model("contact",contactSchema);