const express=require("express");
const app=express();
const port=3030;

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("app is listening port 3030");

})

app.get("/",(req,res)=>{
    res.send("successful");
})

app.get("/ig/:username",(req,res)=>{
    let mannu=require("./data.json");
    let {username}=req.params;
    let data=mannu[username];
    res.render("instagram.ejs",{data});
})
