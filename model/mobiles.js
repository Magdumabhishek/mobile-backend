const mongoose = require("mongoose")

const mobilesSchema = new mongoose.Schema({
    Company:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("mobiles",mobilesSchema)