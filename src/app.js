const path=require("path");
const express=require("express");
const hbs=require('hbs');
const app=express();
const port=process.env.PORT||3000;

const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

// to set view engine
app.set("view engine","hbs");
app.set('views',template_path);
hbs.registerPartials(partials_path);

// built-in middleware
app.use(express.static(staticPath));

// template engine route
app.get("",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error");
});

app.listen(3000,()=>{
    console.log("listening at port 3000");
});