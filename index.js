const express = require('express');
const app = express();
const port = 4000;


//Simple request time logger
// app.use('/home', function(req, res, next){
//     console.log("A request for things received at " + Date.now());
//     next();
//  });
app.set('views', './views')
app.set ('view engine', 'pug' )

const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentday = currentDate.getDay();

 app.get('/', function(req, res){
 
   if (currentHour < 17 && currentHour >= 9 && currentday>0 && currentday < 6 ) {
    res.render('home'); 
    console.log(currentday)
   } else res.send("<h1>Site open from Monday to Friday,  from 9 to 17</h1>");
 });



 app.get('/services', function(req, res){
 
   if (currentHour < 17 && currentHour >= 9 && currentday>0 && currentday < 6 ) {
      res.render('services');
} else res.send("<h1>Site open from Monday to Friday,  from 9 to 17</h1>");

});


app.get('/contact', function(req, res){
   
   if (currentHour < 17 && currentHour >= 9 && currentday>0 && currentday < 6 ) {
      res.render('contact');
} else res.send("Site open from Monday to Friday,  from 9 to 17</h1>");

});
 
//  app.get('/home', function(req, res){
//     res.sendFile(__dirname + "/home.html");
//  });



app.listen(port, function(){
  console.log('http://localhost:%s', 
      port);
});