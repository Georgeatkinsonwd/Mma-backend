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
    }
}