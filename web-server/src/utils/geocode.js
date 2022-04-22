// Longitude = boylam demek
// Latitude = enlem 
// center[0]= boylam
// center[1]= enlem

const request = require("request");


const geocode = (callback)=>{
    const url = "http://api.mapbox.com/geocoding/v5/mapbox.places/bursa.json?access_token=pk.eyJ1IjoiaWZzNSIsImEiOiJjbDFveGZ2cjIxNjV3M2tvMm1kaW45MjF3In0.jakzckr8Zkj8Xdbo8yQ05w"


    request( {url,json:true},(error,response)=>{
        if(error){
            callback("Bursa verisi bulunamadı",undefined);
        }else{
            callback(undefined,{boylam:response.body.features[0].center[0],enlem:response.body.features[1].center[1]});
        }
    });
};


module.exports = geocode