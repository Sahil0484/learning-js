function addTwoNumbers(number1,number2){
return (number1+number2)
}
const result=addTwoNumbers(5,4)
// console.log("result",result)

function calculatePrice(...num1){
    return num1

}
// console.log(calculatePrice(200,250,400,500))

//passing objects in functions

const user={
    name:"aakash",
    price:456
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and prie is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    name:"david",
    price:234
})


const myarr=[200,400,300,500]
function handleArray(myarr){
    return myarr[2]

}
console.log(handleArray(myarr))