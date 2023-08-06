const express =require("express")
const app = express();


app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/idea_app_demo",(req,res)=>{
res.send("you have visirted idea_app_demo")
})
module.exports = app