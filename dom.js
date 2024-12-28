// dom - document object model

// to access and update html elements through js
// document

// css selectors

// id, class, element

// document.getElementById("page-header");
// console.log(document.getElementsByClassName('header-class');
// console.log(document.querySelector(".header-class"))
// console.log(document.querySelector("#header-page"))

// console.log(document.querySelector("input[name='test']"))
// console.log(document.querySelector("h1"))

const element = document.getElementById('page-header');
console.log(element.innerHTML)

const myFunction = () => {
    element.innerHTML = '<span>Testing innerHTML</span><span>Test</span>'
}
element.addEventListener('click', myFunction);

// counter 
// 2
// 3 buttons increase decrease reset




