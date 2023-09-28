//importing express
const express = require("express");
const app = express();

const db = require('./config/mongoose');
//Using MiddleWare To Decode Request
app.use(express.urlencoded());

//setting-up ejs
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

//Using MiddleWare To Provider Static File To Assets
app.use(express.static(path.join(__dirname, "/assets")));

//Adding Router MiddleWare To Use Router
//for any url start with '/' a router middleware get called
app.use('/', require("./routers/homeRouter"));
app.listen(8000, (error) => {
    if (error) {
        console.log("Could Not Connect With Server", error);
        return;
    }
    console.log("Server is Running Up and Successfully Connected To Port: 8000");
});
