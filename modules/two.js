

module.exports = {
  makeItDollars: makeItDollars
}


function makeItDollars(number){
return number.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

// console.log(makeItDollars(422849));
