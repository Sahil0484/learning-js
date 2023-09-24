let name="sahil"
const repocount=50
// console.log(name + repocount + "value");
console.log(`hello my name is ${name}`)
const gameName=new String('sahil-rao')
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('a'))
const newString=gameName.substring(0,4)
// 4 is not included
console.log(newString)
const naewString=gameName.slice(-8,4)
console.log(naewString)

const newString1="  Sahil  "
console.log(newString1.trim())
const url="https://sahil.com%12rao"
console.log(url.replace('%12','-'))
console.log(url.includes('rao'))

console.log(gameName.split('-'))