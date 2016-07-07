
module.exports = {
  myRandom: myRandom
}

function myRandom(min, max) {
return  Math.floor(Math.random() * (max - min) + min);
}

// console.log(myRandom(100, 1000000));
