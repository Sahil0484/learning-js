let score=100;
// sccore is a number 
let balance=new Number(200)
// balance is properly defined as number 
console.log(balance)
console.log(balance.toFixed(3))
// to fixed will give a precision in balance upto 3 decimal points

const otherNumber =123.8966
console.log(otherNumber.toPrecision(5))

// for performing any math functions use math library
console.log(Math.random())

const min=10
const max=20
// if i want a number between min and max
console.log(Math.floor((Math.random()*(max-min+1))+min))