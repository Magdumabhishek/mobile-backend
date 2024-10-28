const Mobiles = require("../model/mobiles")

exports.getMobiles = async (req,res)=>{
    try {
        const data = await Mobiles.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postMobiles = async (req,res) => {
    try {
        const data = await Mobiles.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putMobiles = async (req,res) => {
    try {
        const data = await Mobiles.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteMobiles = async (req,res) => {
    try {
        const data = await Mobiles.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}