const express=require("express");
const auth=require("../auth/auth");
const router=express.Router();

router.post("/login",function(req,res){
    auth.validateUser({"username":"hamada","password":"asdasd"});
    console.log("request received");
    res.send("Login page");
})

module.exports=router;