const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selectSchema = mongoose.Schema({
    selectName : {
        type: String,
        required: true,
    },
    selectDescription: {
        type: String,
        required: false,
    },
    selectId: {
        type: Number,
        required: true,
    },
    selectImage: {
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

module.exports = mongoose.model("select", selectSchema);