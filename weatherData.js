const request = require('request');
const key = "654c302bce3c08d025434466eee4cf8f"
request('https://api.openweathermap.org/data/2.5/weather?q={"place"}&appid=key',(err,req,res)=>{
 if(err){
    console.log(err)
 }
 console.log(body.url);
 console.log(body.explanation)
});