
var mod3 = require('./modules/three.js');
var port = 3000;
var express = require('express');
var jquery = require('./public/jquery-3.0.0.min.js')
var app = express();

// var balanceObject = {};
app.use(express.static('public'));


app.get('/balance', function(request, response){
  var balanceObject= {
    getMoney: mod3.combineFunction(),
    getBalance: mod3.accountBalance()
  };
  // balanceObject.getMoney = mod3.combineFunction();
  // balanceObject.getBalance = mod3.accountBalance();
  response.send(balanceObject);
});

// app.post('/balance', function(request, response){
//   var formObject = {
//     minimumDollar = html.
//   }
//
// });


app.listen(port, function(request, response){
  console.log('Listening on port 3000');
});
