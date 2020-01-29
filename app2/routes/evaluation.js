var express = require('express');
var router = express.Router();
var evaData=require('../model/evaluation')


router.get('/evaluation', function(req, res) {

  res.render('evaluation')
});
router.post('/evaluation',function(req,res){
  evaData.findOne({content:req.body.content},function(result){
    if(result!==null){
      res.send('repeated')
    }else{
      var newevaData=new evaData({
        content:req.body.content,
        time:new Date()
      })
      newevaData.save(function(){
        res.send('evalustion save success')
      })
    }
  })
})

module.exports = router;
