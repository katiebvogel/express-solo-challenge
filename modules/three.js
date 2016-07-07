var mod1 = require('./one.js');
var mod2 = require('./two.js');

var min

module.exports = {
  combineFunction: combineFunction,
  accountBalance: accountBalance
}

function combineFunction(){
return (mod2.makeItDollars(mod1.myRandom(100, 1000000)));
}

function accountBalance(){
  return "Account balance: \n ";
}

// combineFunction();
