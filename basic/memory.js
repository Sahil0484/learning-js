// all primitive data types takes space in stack whereas non-primitive takes in 

let name="sahil"
let anotherName = name  
// copy of name variable is passed in anothername variable
anotherName="rao"
console.log(name)
console.log(anotherName)

let user1={
    email:"abc@gmail.com",
    upi:"def@ybl"
}
let user2=user1
user2.email="sahil@gmail.com"
// user1 is non primitve that's why reference of user1 will be passed to user2 and changes will be made in original copy
console.log(user1.email);
console.log(user2.email);