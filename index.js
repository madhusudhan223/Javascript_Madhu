//javascript synchronous single thread
// variables - used to store a piece of data - 
//var - global scope ----> old one
// let, const -- local scope
// different types of data

// string - "test"
// numbers- 1234
// objects - {name: "test", rollno:123}
// arrays - [1, 2, 3], ['test1', 'test2'],[{ name: "test", rollno: 123 }, { name: "test1", rollno: 1234 }]
// Symbol
// undefined
// null

// const test = "1234";
// console.log(a)
// variable declaration
// var a = {
//     name: "test",
//     rollno: 123
// };


//we can declare variables in 3 ways ---> var, let, const
// var - global 
// let, const - local/block scope
// var a = 200;

// function printNumbers() {

//       for(i=1; i<10; i++){
//         const a = ''
//           // console.log(a)
//       }
//       console.log(a)

//     // console.log(a)
// }
// printNumbers()

// let const

// let a = 10;
// a=20;
// console.log(a)

//closure

// function print(){
//   const a = 10;
//   function odd(){
//     console.log(a)
//   }
//   odd()

// }

// print()

// const test = new String ("string test");
// const test = "TRUE test";
// const number = 1233;
// const len = test.

// var test = "hello";
// var test = "world";
// console.log(test);
// test == 'true'


// function printNos(a,b){
//   for (i=a; i<=b; i++){
//     console.log(i)
//   }

// }

// printNos(2,10)


// let a


// var a;
// console.log(a)
// a = 10

// printNumbers();
// console.log(a);

// console.log(a);
//  let a = 10; // declartion and intialization 

// hoisting -- var declaration function declarions will move to the top of scope
//functions

// string methods
// ``
//2,3,4

//  function reverseString(str){
//     let reversedString = "";
//     for(i = str.length-1; i >= 0; i--){

//         // reverseString += str[i]

//         reversedString = reversedString + str[i]
//     }
//  return reversedString
// }

// cons

// console.log(reverseString("world"));

// const fullName = "hello world";
// const reverseString = fullName.split("").reverse().join("");

// const data = new Date();


// const day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

// console.log(data.getHours());
// console.log(reverseString)

// split = converting string to array ;;

// join == array to sting;

// console.log(["h", "e", "l", "l", "o"].join(""))

// console.log(fullName[2])

// function getInputValue() {
//     const element = document.getElementById("input-box");
//     console.log("ele", element.value)
// }
// getInputValue();

// write a program ---> pass a 

// "Hello World". = 
//array objects, strings , functions

// const number = 20; // number
// const string = "20"; // string
// number != string 
// number !== string

// console.log(Number.toString(20));

// 0 - false 
// 1 - true 

// console.log(isNaN());

// NaN ---> "not a number"




//floor 1.1 or 1.2 or 1.6 -- > 1
// ceil 1.1 or 1.2 or 1.6 ---> 2
// round --> >= 1.5 ---> 2 

// cons()






// console.log((number == string) && (number > string));

//  (condition1) & (condition2) = "true if only both are true "

// function 

// if( 30 > 20){
//     console.log('if block -->1')
// }
//  if(20>0){
//     console.log("else block-->2")

// }else{
//     console.log("else if else if-->3")
// }


// function getCharacters(str, leng) {

//     // return str.substring(0, leng)
//     // "tes".s


// }
// console.log(getCharacters("hello world", 5));


// objects  

// const obj = {
//     name: "test",
// //     rollno: 223,        ({})
//                              |
//                              |
//                            2214234
//     address:'1/26',
//     pincode:1223 
// };

// let a = "abc";
// let b = a ;
// a = "test"
// console.log(a, b);

// const obj = {
//     name: 'test',
//     rollNo : 223
// }
// const arr = [{},{},{}]

// function test(a,b, ...c) {
//     console.log(a,b,c);

// }

// test(1,2,3,4,5,6,7,8);

// const copyArray = [...arr]
// const obj1 = { ...obj } 
// obj1.rollNo = 333;

// console.log(obj1, obj)

// es6 features - 2015 js

// spread and rest operator  ---> ...spread ---> object and arrays, rest operator --->functions with mutiple params.
// destructuring  ---> will be useful on objects and arrays
// arrow functions
// let const 
// ``



// const obj = {
//     // name: "test",
//     rollno: 223,
//     address:'1-26',
//     street:'marathahalli'
// }

// const userName = obj.name;
// const rollNo = obj.rollno;
// const useAddress = obj.address;
// const userStreet = obj.street;

// const { name = "", rollno, address, street } = obj;

// const arr = ["test", "hello", "world" ];
// const name1 = arr[0]
// const name2 = arr[1],
// const name3 = arr[2]
// const [name1, name2, name3] = arr

// console.log(name3);


// console.log(myFunction(2,3));


// Objects -- call, apply, bind ---> 

// array methods

//by default --> this keyword will be pointing to global/window  


// console.log(myFunction(1,2));




// const myFunction = (a,b) => a+b ;
// console.log(this)

// console.log(myFunction(1, 4));



// 





// Object.ge
// Object.assign =

// Object.call
// Object.apply
// Object.bind
// Object.prototype.myFunction = () => {
//     console.log("hello")
// }
// Object.myFunction();

// const objectCopy = JSON.parse(JSON.stringify(obj));

// objectCopy.rollNo = 333;
// console.log(objectCopy, obj)

// json - similar to object but key must be string

// const json = '{"name":"John", "age":30, "city":"New York"}'

// console.log(objectCopy)

// JSON.parse()


// const obj1 = {
//     address:'1/28',
//     street: "marathahalli"
// }
// // shallow copy -- references wil be copied but not actual values - so whenever i try to change original object, copied object also affects.
//deep copy ---> actual values will be copied

//shallow copy and deep copy

// target object // source object

// const obj1 = obj;




// const copyObject = Object.assign({}, obj); // deep copy
// obj.name = "world"
// console.log(copyObject);
// console.log(obj)
// console.log(copyObject.name);
// console.log(obj);



// const obj1 = obj;
// obj.rollNo = 333;

// console.log(obj, obj1);





// reference data ---> arrays and objects 
// non reference ---> strings numbers 




// const obj1 ={

// }
// obj.name = "world"
// obj.address

// [1,2,3,4].length

// console.log(obj.name, obj.rollno) //
// console.log(obj["name"], obj["rollno"]) //

// console.log(Object.keys(obj));

//  for(i=0, i )

// for in  ---> objects

// obj.address
// obj["address"]

// for (variable in obj){
//     console.log(`${variable} : ${obj[variable]}`)
// }
// for(arr of array){

// }
// for of ---> arrays

// obj['na']  


// backend --> data will be stored


// frontend --->access the backend data

// application programming interface (api)

// api endpoint ---> https://jsonplaceholder.typicode.com/posts

// 

// fetch()




// there are two types to access the obj 
// dot notation 
// bracket notation

//shallow copy and deep copy ---->\

// reference data types : array and objects
// non refernace ---> number string boolean

// const obj = {
//     name: "test",
//     rollno: 223,
//     test:{  
//         a: "nested"
//     }
// }
// two ways ---> spread operator, or object.assign
// const copyObject = JSON.parse(JSON.stringify(obj));

// copyObject.rollno = 333
// copyObject.test.a = "hello";
// console.log(copyObject)
// console.log(obj);

function localStorageTest(props){

    localStorage.setItem('myName', "john" );
    const name = localStorage.getItem('myName');
    console.log(name);
    

    // Object = {}

    // localStorage.eg
    
    // sessionStorage.removeItem


// console.log('myarray', myArray, typeof myArray)
    // const myName = localStorage.getItem("myName")
    // localStorage.removeItem('rollNo') // removes specific data
    // localStorage.clear() // it clears all the key and value
    // console.log(myName)
}
localStorageTest("john")
// [].


// async defer attributes <script>

// <script> download the script and it will excute js - then remaining html parsing --> block html parsing

// defer 

// it will downlaod js parallely and excutes parallely

// it will download js parallely it will ecute js and the html parsing

//

// 

// deep copy ---> that is true in case we dont have nested objects --->


// deep copy ---> JSON,parse(JSON.stringify(obj))
// shallow copy ----> spread operator, assign 












