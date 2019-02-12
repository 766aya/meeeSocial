const process = require("process")
const express = require("express");
const bodyParser = require("body-parser") 
const async = require("async")

const log4js= require("./logConfig")
const logger = log4js.getLogger()
const errlogger = log4js.getLogger("err")
const othlogger = log4js.getLogger("oth")

// express
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({limit: "20mb"}));
const server = app.listen(port, function() {
    let host = server.address().address;
    console.log("server listening at http://%s:%s", host, port);
});
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// logger
log4js.useLogger(app, logger);

// 
process.on("uncaughtException", function (err) {
    errlogger.error(err.stack);

    process.exit(1);
});

app.post("/sendTransaction", function(req, res) {
    
}