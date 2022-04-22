const express = require("express");
const res = require("express/lib/response");
const weather = require("../utils/weather");
const geocode = require("../utils/geocode");


const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{ // gerçekten html sayfası olması lazım
    res.send("Şimdilik ana sayfa");
});

app.get("/test_text",(req,res)=>{ // yazi olarak adimi döndürür.
    res.send("18360859024");
});

app.get("/test_html",(req,res)=>{ // yazi olarak html içine yazarak etiket içinde adim yazar.
    res.send("<h1>Mustafa Eren</h1>");
});

app.get("/test_json",(req,res)=>{
    res.send({ogrenci_numara:"18360859024",ad:"Mustafa",soyad:"Eren"});
});


app.get("/test_weather",(req,res)=>{
    weather((error,{temperature,humidity})=>{
        if(error){
            res.send(error);
        }else{
            const veri = {
                temperature,
                humidity
            }
            res.send(veri);
        }
    });
});

app.get("/test_geocode",(req,res)=>{
    geocode((error,{enlem,boylam})=>{
        if(error){
            res.send(error);
        }else{
            const veri = {
                enlem,
                boylam
            }
            res.send(veri);
        }
    });
});


app.listen(port,()=>{
    console.log(port + ". portta çalışıyor");
});
