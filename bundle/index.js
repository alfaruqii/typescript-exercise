"use strict";
let myName = "alfaruqi";
let yourName = "zahra";
let temen1 = {
    name: "Dika",
    gender: "lelaki",
    hutang: 40000000
};
let zahra = [yourName, 17, "perempuan"];
let absens = 123; //usually use "number" instead of "Number" and also "String" use "String"
//array
let data = ["hehe"];
let newData = ["haloo", 10];
//function
function callMe(x, y) {
    // let a = x
    // let b = y
    // let z:number = a + b
    return `hasil nya adalah ${x + y}`;
}
let callMyName = () => {
    //if i return myName that i have type "String" not "string" it will have an error
    return yourName;
};
function CallSpec(spec) {
    return `
  This was your laptop specification,
  ---
  brand : ${spec.brand} ✨
  model : ${spec.model} ✨
  processor : ${spec.processor} ✨
  display : ${spec.display} ✨
  ---
  Thats all your laptop specification, hope you like it ✨
  `;
}
console.log(myName);
console.log(zahra);
console.log(callMyName());
const result = callMe(4, 5);
console.log(result);
console.log({ temen1 });
console.log({ absens });
console.log({ myName });
console.log(data);
console.log(newData);
const laptopResult = CallSpec({
    brand: "thinkpad",
    model: "x220",
    processor: {
        brand: "intel",
        core: {
            totalCore: 12
        },
        clockspeed: true
    },
    display: {
        typeDisplay: "1920x1080"
    }
});
console.log(laptopResult);
