const { request } = require('express')
const FighterModel = require('../models/Fighters')


module.exports = {
    getFighters: (req,res)=>{
        FighterModel.find({}, (err,result)=>{
            if (err){
                res.json(err)
            } else {
                res.json(result)
            }
        })
    },
    getFighter: async (req,res)=>{
        const fighter = await FighterModel.findById({_id: req.params.id})
        try{
        res.json(fighter)
    }
    catch(err){
        console.log(err)
    }
    },
    createFighter: async (req,res)=>{
        const fighter = req.body
        const newFighter = new FighterModel(fighter)
        // .save is a function from mongoose
        await newFighter.save()

        res.json(fighter)
    },

    increaseRank: async (req,res)=>{
        const fighter = await FighterModel.findByIdAndUpdate({_id:req.params.id},req.body)
        
        try {
            const update = await FighterModel.findOne({_id:req.params.id})
            res.json(update)

        } catch (error) {
            console.log(error)
        }
    }
}