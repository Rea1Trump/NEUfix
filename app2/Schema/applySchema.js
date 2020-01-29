var mongoose=require('mongoose')

module.exports=new mongoose.Schema({
    device_type:String,
    device_model:String,
    time:String,
    description:String,
    contact:Number,
    connecttime:String,
    site:String,
    status:Boolean
})