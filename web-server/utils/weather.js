
const request = require("request");


const getGeocodes = (callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=77d9a224fa3ff079eea51e757102ff3e&query=bursa"

    request( {url,json:true},(error,response)=>{
        if(error){
            callback(error,undefined);
        }else{
            callback(undefined,response.body);
        }
    });
};