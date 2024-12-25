

// const obj = {
//     studentName:"john",
//     studentRole:'dev'
// }
// const obj1={
//     studentName: "hello"
// }


// global ---> studentName

// this ---> global
// this ----> obj 

// if you want to call a function with respect to particular this object reference---> call, apply, bind
// function printName(rollNo, address){
//     // console.log(global)
//     console.log(this.studentName);
// }

// printName.call(obj);
// printName(223, "1/28", {}, [])

// call, apply

// call
//  printName.call(obj, 223, '1/28');
//  printName.apply(obj,[223, '1/28']);
// pr
// newFunction()

// bind ---> returns a functions

// const newFunction = printName.bind(obj);
// newFunction(223, '1/28')
// or
// const newFunction = printName.bind(obj, 223, '1/28');
// newFunction()



// Object ---> "prototype"

// const obj = {name:'hello', rollNo:'223'}  ===> Object ==> null
// const array = [] ==> Array ===> Object ===> null
// const func = ()=> {} ===> Function ===> Object ==> null



// myFunction ---> camel case
// studentName ---> camel case

// pascal ---> MyClass ---> pascal case

// Object  
// Array
// Function

// Object.prototype.myFunction = () => {
//     console.log("hello")
// }

// obj.

// java- inheritance 





 
