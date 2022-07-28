const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');
const app = express();
require('dotenv').config();
const key = process.env.API_KEY
let place ;
let temp ;
let feels_like;
let min;
let max;
let desc;
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", 'ejs');



app.get("/", (req, res) => {

    res.render("index", { CITY: place, TEMP: temp,FEELS:feels_like,MAX:max ,MIN:min,DESCRIPTION:desc });
    
});

app.post("/", (req, resp) => {
    place = req.body.city;
     let url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${key}`
    request(url, (err, res, body) => {
    if (err) {
        console.log(err)
    }else{
        let weather = JSON.parse(body)
          temp = weather.main.temp;
          feels_like = weather.main.feels_like;
          min = weather.main.temp_min;
          max = weather.main.temp_max;
          desc =weather.weather[0].description;
          resp.redirect("/");
    }
});
   
});

app.listen(3000, () => {
    console.log("server running in port 3000");
})