// const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sahil",
            lastname:"rao"
        }
    }
}
// console.log(regularUser.fullname.userfullname)
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c"
}
const obj3=Object.assign(obj1,obj2)
// console.log(obj3)

// objects in Array
const arr=[
    {
        id:'123asd',
        username:'asdgh@gamil.com'
    },
    {
        fullname:'rao'
    }
]
// console.log(arr[0].id)?

// use of keys as array elements
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    coursename:"learining js",
    price:"1234"
}
// const{coursename:name}=course  de-structure of objects
// console.log(name)

// it is json api
// {
//     "name":"sahil",
//     "coursename":"js "
// }