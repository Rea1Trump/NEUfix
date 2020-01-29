var express=require('express');
var ejs=require('ejs');
var mongoose=require("mongoose");
//var MongoClient=require('mongodb');
var path =require('path');
var bodyParser=require('body-parser');

//var EvalutionData=require('./model/evaluation')


/*



mongoose.connect('mongodb://localhost:27017/userData',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
})

*/
var app=express();

app.set('views',path.join('views'))
app.engine('html',ejs.renderFile)
app.set('view engine','html');//渲染模板



app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/home',function(req,res){
  res.render('signin');
})
app.use('/home',require('./routes/sign'));
app.use('/home',require('./routes/apply'));
app.use('/home',require('./routes/evaluation'))

//以下未完待续
/*
app.get('/home/user:id',function(req,res,next){
  EvalutionData.find({username:id},function(err,req,res){
    if(err){
      console.log(err)
    }else if(result===null){
      res.send('null')
    }else{
      res.send(result)
    }
    
  })
})
*/

console.log('http://localhost:3000/home');

module.exports = app;
