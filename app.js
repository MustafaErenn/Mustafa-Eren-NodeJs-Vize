const express = require("express");

const app = express();


const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Şimdilik ana sayfa");
});

app.get("/test_text",(req,res)=>{
    res.send("18360859024");
});

app.get("/test_json",(req,res)=>{
    res.send({ogrenci_numara:"18360859024",ad:"Mustafa",soyad:"Eren"});
});