
const request = require("request");


const weather = (callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=77d9a224fa3ff079eea51e757102ff3e&query=bursa"

    request( {url,json:true},(error,response)=>{
        if(error){
            callback(error,undefined);
        }else{
            callback(undefined,{
                temperature:response.body.current.temperature,
                humidity:response.body.current.humidity,
                pressure:response.body.current.pressure,
            });
        }
    });
};


module.exports = weather