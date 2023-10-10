const myarr=[2,3,4,5];
for (const iterator of myarr) {
    // console.log(iterator)
}
const map= new Map();
map.set('sahil',1);
map.set('hello',2);
map.set('sahil',1);
// console.log(map)
for (const [key,value] of map) {
    // console.log(`${key} have a value ${value}`)
}

const array=['js','cpp','c']
array.forEach(function(val){
    // console.log(val)
})

const array1=[1,2,3,5,6,7,8]
const result=array1.filter((num)=>num>4)
// console.log(result)

let result1=array1.map((num)=>num*10)
// console.log(result1)
let result2=array1.map((num)=>num*10).map((num)=>num*-1)
// console.log(result2)


const total=[1,2,3]
const result3=total.reduce((acc,currval)=>acc+currval,0)
console.log(result3)