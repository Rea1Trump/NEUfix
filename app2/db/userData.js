var mongoose=require('mongoose')
var Udb=mongoose.createConnection('mongodb://localhost:27017/userData',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log(err)
    }else{
        console.log('userDatabase connect success')
    }
})
module.exports=Udb;
