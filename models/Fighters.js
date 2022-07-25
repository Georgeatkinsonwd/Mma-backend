const mongoose = require('mongoose')


const FighterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type:String,
        required: false,
    },
    nationality: {
        type: String,
        required: true,
    },
    rank: {
        type:Number,
        required: true,
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
    imgSrc: {
        type: String,
        required: false,
    }
})


const FighterModel = mongoose.model("fighters", FighterSchema)

module.exports = FighterModel