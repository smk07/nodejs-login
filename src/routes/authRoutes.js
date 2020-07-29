const express = require('express');

const router = express.Router();

router.post('/signup',(req,res)=>{
    const {email,password} = req.body;

    return res.status(201).send({email,password,message:"Account Created Successfully"});
});

router.post('/signin',(req,res)=>{
    const {email,password} = req.body;

    const emaili="haha@hehe.com";
    const passwordi = "mypassword";

    if(emaili ===  email && password === passwordi)
        return res.status(200).send({message:"Logged In Successfully"});

    return res.status(401).send({message:"Invalid Credentials"});
});

module.exports= router;
