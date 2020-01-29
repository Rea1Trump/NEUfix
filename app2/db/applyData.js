var mongoose=require('mongoose')
var Adb=mongoose.createConnection('mongodb://localhost:27017/applyData',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log(err)
    }else{
        console.log('applyDtabase connect success')
    }
})

module.exports=Adb;