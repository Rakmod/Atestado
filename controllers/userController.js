const express=require("express");
const router=express.Router();

router.post("/login",function(req,res){
    console.log("request received");
    res.send("Login page");
})

module.exports=router;