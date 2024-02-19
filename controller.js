//const db = require ('./db');

const homePage =(req,res)=>{
    res.status(200).json({message:"Home Page"})
}

const userRegister = (req,res)=>{
    var data=req.body;
    console.log
    res.status(200).json({message:"user Register"})
}

const userLogin = (req,res)=>{}

module.exports ={
    homePage:homePage,
    userRegister:userRegister,
    userLogin:userLogin
    
}



