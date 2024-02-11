const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const daySchema = mongoose.Schema({
    dayId:{
        type: Number,
        required: true,
    },
    dayName: {
        type: String,
        required: true,
    },
    dayDressImage: {
        type: Array,
        required: true,
    },
    dayDescription: {
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

module.exports = mongoose.model("day",daySchema);