// function doSomething(param){
//     console.log("do something");
//     param()
// }

// function delay(ms, message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, ms);
//     });
// }

// Promise.then(()=>{}).catch()

// then()//success- promise
// catch()// fail - reject

// Execute tasks sequentially using Promise chaining
// delay(1000, "Executed after 1000ms").then((ms) => {
//     delay(1000, "eccc").then((err)=>{
//         delay(300,"fff").then().catch

//     }).catch((err)=>{

//     })

// }).catch(()=>{

// })
// .then((ms) => delay(3000, "Executed after 3000ms"))
// .then(() => delay(2000, "Executed after 2000ms"))
// .catch((error) => console.error("Error:", error));

// const myFun = async () => {

// }
//  async function myFunction(){
//     const data = await getApiData();
//     console.log(data)
//     data.map()
// }

// function test(){
//     console.log("text");
// }

// doSomething(test);

// setTimeout(() => {
//   console.log("1000"); // home page
// }, 1000);

// setTimeout(() => {
//   console.log("4000"); /// bacend cakll data
// }, 4000);

// setTimeout(() => {
//   console.log("2000"); // data dispaly maps
// }, 2000);

// call back hell

// setTimeout(() => {
//   console.log("1000");
//   setTimeout(() => {
//     console.log("4000");
//     setTimeout(() => {
//       console.log("2000");
//     }, 2000);
//   }, 4000);
// }, 1000);

// fetch

// const promise = new Promise((resolve, reject) => {
//      reject('failure')
// })

// promise.then((msg)=>{
//     console.log("then block",msg)
// }).catch(err => {
//     console.log("catch", err)
// })
// data display

// ddd
// make a request to backend data and get the data ---> it will
// data.map(()=>{

// })

// synchronous --- a piece of code which executes line by line
// asynchronous --> a piece of code which does not excute line by line

// to execute asynchronous statements sequentially

// cb -->

// promises - es 5

// pending --> initial state
// fulfilled ---> resolve promise
// rejected ---> promise rejected

// async await es6 - 2015
// synchrous generator

// function* genFunc1() {
//     yield getApiData();
//     yield
// }

// map() . -- what parameters it takes, and what it returns

// // const returnAarray = [1,2].map((item, i, array)=>{
// //     item*2

// })

const userName = {
    name:'john',
    DOB:'1/1/1980'
};

const  options = {
    method :'get',
    body: JSON.stringify(userName) ,
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }

}


let apiData = [];
function fetchApi() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            apiData = data;
            return apiData;
        })
        .catch((error) => console.error("Error fetching data:", error));
}

fetchApi().then(() => {
   console.log(apiData)
});


//  function displayData(){
//   const data = fetchApi(); 
//   console.log(data)

// }
// displayData()


// get, post, create, delete

// get method default


