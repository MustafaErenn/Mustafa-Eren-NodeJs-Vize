const express = require("express");
const res = require("express/lib/response");
const weather = require("./utils/weather");
const geocode = require("./utils/geocode");
const path = require("path");

const publicDirectory = path.join(__dirname,"../public/index.html");

//MUSTAFA EREN-18360859024

const app = express();
const port = process.env.PORT || 3000;


app.get("/",(req,res)=>{ // public altnda tanımlı index.html dosyasını döndürür.
    res.sendFile(publicDirectory);
});

app.get("/test_text",(req,res)=>{ // yazi olarak adimi döndürür.
    res.send("18360859024");
});

app.get("/test_html",(req,res)=>{ // yazi olarak html etiketlerini kullanarak döndürür.
    res.send("<h1>Mustafa Eren</h1>");
});

app.get("/test_json",(req,res)=>{ // JSON formatinda bilgileri döndürür.
    res.send({ogrenci_numara:"18360859024",ad:"Mustafa",soyad:"Eren"});
});


app.get("/test_weather",(req,res)=>{ // bursanın sıcaklık,nem,basınc degerlerini döndürür.
    weather((error,{temperature,humidity,pressure})=>{
        if(error){
            res.send(error);
        }else{
            const veri = {
                temperature,
                humidity,
                pressure
            }
            res.send(veri);
        }
    });
});

app.get("/test_geocode",(req,res)=>{ // bursanın enlem ve boylam bilgilerini döndürür.
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
