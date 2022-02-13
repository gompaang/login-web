"use strict";

//모듈
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//라우팅 
const home=require("./src/routes/home");

//앱 세팅
app.set("views",'./src/views');  //src 경로 추가함.. 휴 힘드네
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',home); //미들웨어를 등록하는 메소드:use

module.exports = app;