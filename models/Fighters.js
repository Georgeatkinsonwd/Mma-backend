const mongoose = require('mongoose')


const FighterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    record: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    weightClass: {
        type: String,
        required: true,
    },
    reach : {
        type: String,
        required: true,
    },
    filmImg: {
        type: String,
        required: false,
    }
})


const FighterModel = mongoose.model("fighters", FighterSchema)

module.exports = FighterModel