const express=require("express");
const user=require('./controllers/userController.js');

const app=express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.end("HEllo worldddd");
})
app.use('/user',user);
app.listen(port,()=>{
    console.log("Server started on port: %d ", port);
});