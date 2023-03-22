let myName: String = "alfaruqi"
let yourName:string = "zahra"
type Temen = {
  name : string,
  gender : string,
  hutang? : number
}
let temen1:Temen = {
  name:"Dika",
  gender:"lelaki",
  hutang:40_000_000
}
let absens:number = 123 //usually use "number" instead of "Number" and also "String" use "String"

//array
let data:Array<any> = ["hehe"]
let newData:(string|number)[] = ["haloo",10]

//function
function callMe(x:number,y:number):void{
  let a = x
  let b = y
  let z = a + b
  console.log(z)
}
let callMyName = () :string => {
  //if i return myName that i have type "String" not "string" it will have an error
  return yourName
}


console.log(myName)
console.log(callMyName())
callMe(4,5)

console.log({temen1})
console.log({absens})
console.log({myName})

console.log(data)
console.log(newData)
