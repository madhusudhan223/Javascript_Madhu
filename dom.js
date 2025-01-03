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
const image = document.createElement("img");
image.setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif")
// console.log(image)
element.appendChild(image);
image.classList.add("image");

// https://www.w3schools.com/js/pic_bulbon.gif



// toggle ---> on/off

// element.classList.add("test");
// const newElement = document.createElement("a")
// newElement.innerText = "My link"
// newElement.setAttribute("href", "https://youtube.com")
// element.appendChild(newElement)
// console.log(newElement)
// element

const myFunction = () => {
    // console.log(this.parent)
    const imgSrc = document.getElementsByClassName("image");
    console.log(imgSrc[0].parentElement);

    // const bulbon = 'https://www.w3schools.com/js/pic_bulbon.gif';
    // const buloff = 'https://www.w3schools.com/js/pic_bulboff.gif';

    // if (imgSrc[0].src == bulbon ){
    //     imgSrc[0].src = buloff;
    // }else{
    //     imgSrc[0].src = bulbon
    // }

    // imgSrc[0].src == bulbon ? imgSrc[0].src = buloff : imgSrc[0].src = bulbon

    // imgSrc[0].src = "https://www.w3schools.com/js/pic_bulbon.gif";

}

image.addEventListener("click", myFunction);

// counter 
// 2
// 3 buttons increase decrease reset




