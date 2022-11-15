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

    getWeightClass: async (req,res)=>{
        const fighter = await FighterModel.find({weightClass: req.params.weightClass})
        try {
            res.json(fighter)
        } catch (err) {
            console.log(err)
        }
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

    changeRank: async (req,res)=>{
        const fighter = await FighterModel.findByIdAndUpdate({_id:req.params.id},req.body)
        
        try {
            const update = await FighterModel.findOne({_id:req.params.id})
            res.json(update)

        } catch (error) {
            console.log(error)
        }
    },

    changeAge: async (req,res)=>{
        const fighter = await FighterModel.findByIdAndUpdate({_id:req.params.id},req.body)
        
        try {
            const update = await FighterModel.findOne({_id:req.params.id})
            res.json(update)

        } catch (error) {
            console.log(error)
        }
    },
    deleteFighter: async(req,res)=>{
        
        try {
            await FighterModel.findByIdAndDelete({_id:req.params.id},req.body)
            console.log('Fighter Deleted')
            res.json('Fighter Deleted')
        } catch (error) {
            console.log(error)
        }
    },
    updateRecord: async(req,res)=> {
        const fighter = await FighterModel.findByIdAndUpdate({_id:req.params.id},req.body)
        try {
            const update = await FighterModel.findOne({_id:req.params.id})
            console.log('record updated')
            res.json(update)
        } catch (error) {
            console.log(error)
        }
    }
}