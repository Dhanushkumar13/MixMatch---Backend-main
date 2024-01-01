const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const colorSchema = mongoose.Schema({
    colorId:{
        type: Number,
        required: true,
    },
    colorName: {
        type: String,
        required: true,
    },
    colorImage: {
        type: Array,
        required: true,
    },
    colorDescription: {
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

module.exports = mongoose.model("color",colorSchema);