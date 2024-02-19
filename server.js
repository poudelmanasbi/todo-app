var express = require('express')
var http = require('http')
const body_parser=require('body-parser')
require('dotenv').config()
var port = process.env.port

const app=express()
const router = require('./routes')
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json)
app.use("/",router)


var server=http.createServer(app);


server.listen(port,()=>{
    console.log("server is running in http://localhost:"+port);
})
