var mongoose=require('mongoose')

module.exports=new mongoose.Schema({
    content:String,
    username:String,
    time:String
})