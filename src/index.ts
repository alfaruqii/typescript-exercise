let myName: String = "alfaruqi"
let yourName:string = "zahra"
interface Core {
  totalCore:number
}
interface Processor {
  brand:string,
  core:Core
  clockspeed:boolean
}
interface Display {
  typeDisplay:string
}
interface Laptop {
  brand:string,
  model:string,
  processor:Processor,
  display:Display
}
type Temen = {
  name : string,
  gender : string,
  hutang? : number
}
type Gender = string

type Pasangan = [
  name:string,
  age:number,
  gender:Gender
]

let temen1:Temen = {
  name:"Dika",
  gender:"lelaki",
  hutang:40_000_000
}
let zahra:Pasangan = [yourName,17,"perempuan"]
let absens:number = 123 //usually use "number" instead of "Number" and also "String" use "String"

//array
let data:Array<any> = ["hehe"]
let newData:(string|number)[] = ["haloo",10]

//function
function callMe(x:number,y:number):string{
  // let a = x
  // let b = y
  // let z:number = a + b
  return `hasil nya adalah ${x+y}`
}
let callMyName = () :string => {
  //if i return myName that i have type "String" not "string" it will have an error
  return yourName
}
function CallSpec(spec:Laptop):(Laptop | string){
  return `
  This was your laptop specification,
  ---
  brand : ${spec.brand} ✨
  model : ${spec.model } ✨
  processor : ${spec.processor} ✨
  display : ${spec.display} ✨
  ---
  Thats all your laptop specification, hope you like it ✨
  `
}


console.log(myName)
console.log(zahra)
console.log(callMyName())
const result = callMe(4,5)
console.log(result)

console.log({temen1})
console.log({absens})
console.log({myName})

console.log(data)
console.log(newData)
const laptopResult = CallSpec({
  brand:"thinkpad",
  model:"x220",
  processor:{
    brand:"intel",
    core:{
      totalCore : 12
    },
    clockspeed:true
  },
  display : {
    typeDisplay:"1920x1080"
  }
})
console.log(laptopResult)
