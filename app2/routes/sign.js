var express = require('express');
var router = express.Router();
var UData=require('../model/user');

//router.engine('html',require('ejs').renderFile)
//router.set('view engine','html');

router.get('/signin',function(req,res){
    res.render('signin')
})

//实验发现一定要有get 之后再来post，
router.post('/signin', function(req, res, next) {
  let user=req.body.username;
  let pass=req.body.password;
    if(pass!==null&&user!==null){
  UData.findOne({username:user},function(err,result){
      if(err){
          console.log(err)
          //实验发现加了err参数后，并补充了（if）-（else if）-（else ）结构后是没有问题出现的；
      }
    else if(result===null){
        res.render('signup')
        console.log('user not exited,redirect to signup');
    }else{
            UData.findOne({username:user,password:pass},function(err,result){
                if(err){
                    console.log(err);
                }
                else if(result!==null){
                    res.send('success')
                }else{
                        res.render('signin');
                        console.log('password error');
                }
            })
            
        }
  })
}else{
    console.log('user null or password null')
    res.render('signin');
}
});


router.get('/signup',function(req,res){
    res.render('signup')
});

router.post('/signup',function(req,res,next){
    let user=req.body.username;
    let pass=req.body.password;
    let tel=req.body.tel;
    let qq=req.body.qq;
    UData.findOne({username:user},function(err,result){
        if(err){
            console.log('error');
        }
        if(result===null&&pass!==null){
            var usern=new UData({
                username:user,
                password:pass,
                tel:tel,
                qq:qq
            })
            usern.save(function(){
                res.render('signin');

            })
        }else{
            res.send('password null or username existed,try again');
        }
    })

})


module.exports = router;
