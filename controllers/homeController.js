const FighterModel = require('../models/Fighters')


module.exports = {
    getFighters: (req,res)=>{
        FighterModel.find({}, (err,result)=>{
            if (err){
                res.json(error)
            } else {
                res.json(result)
            }
        })
    },
    createFighter: async (req,res)=>{
        const fighter = req.body
        const newFighter = new FighterModel(fighter)
        // .save is a function from mongoose
        await newFighter.save()

        res.json(fighter)
    }
}