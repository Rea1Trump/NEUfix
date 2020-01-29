var express=require('express')
var router=express.Router();
var AData=require('../model/apply')

router.get('/apply',function(req,res,next){
    res.render('apply')
})

router.post('/apply',function(req,res,next){
    AData.find({contact:req.body.contact},function(result){
        if(result!==null){
            res.send('you have apply for one,never repeat')
        }else{
            var newapply=new AData({
                device_type:req.body.device_type,
                device_model:req.body.device_model,
                time:new Date(),
                description:req.body.description,
                contact:req.body.contact,
                connecttime:new Date(),
                status:false,
                site:req.body.site
                })
                newapply.save(function(err){
                    if(err){
                        console.log(err)
                    }else{
                        res.send('apply success ,wait patiently')
                    }
                })
        }
    })
    
    
})
module.exports=router;