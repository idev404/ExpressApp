// Config

var express = require('express'); 
var expressApp = express(); 
var appPort = 3000; 
  
// Express Code
expressApp.use('/', function(req, res, next){ 
    res.send('<h1>Hello Express!</h1>')
    next(); 
}); 
 
  
// Ready
expressApp.listen(appPort, function(ExpressError){ 
    if (ExpressError) console.log(ExpressError); 
    console.log("Express App started at website: localhost:3000") 
}); 