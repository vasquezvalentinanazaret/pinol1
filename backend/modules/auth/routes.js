
const router = require('express').Router();
const jwt = require('jsonwebtoken');

let users=[];

router.post('/register',(req,res)=>{
 const user={id:Date.now(),...req.body,role:req.body.role||'user',cacaos:0};
 users.push(user);
 const token=jwt.sign(user,'secret');
 res.json({user,token});
});

router.post('/login',(req,res)=>{
 const user=users.find(u=>u.email===req.body.email);
 if(!user) return res.status(404).send('User not found');
 const token=jwt.sign(user,'secret');
 res.json({user,token});
});

module.exports=router;
