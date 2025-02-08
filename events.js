
const parentElement = document.getElementById("parent-element");
const childElement = document.getElementById("child-element");
const childElement1 = document.getElementById("child-element-1");

// console.log(parentElement, childElement)

// const hadleChildClick = (e) =>{
//     // e.stopPropagation()
//     console.log("child1 clicked")
// }
// const hadleParentClick = () => {
//     console.log("Parent clicked")
// }
const hadleChildClick1 = (e) => {
    setTimeout(() => {
        console.log("child2 clicked")
    }, 2000)
    // console.log(e)
    // e.stopPropagation()
   
}

// childElement.addEventListener("click", hadleChildClick);
// parentElement.addEventListener("click", hadleParentClick)
childElement1.addEventListener("click", hadleChildClick1);

const inputBox = document.getElementById("input-box")
const handleFocus = ()=>{
console.log("input focused")
}
const handleBlur = () => {
    console.log("input blurred")
}


inputBox.addEventListener("focus", handleFocus )
inputBox.addEventListener("blur", handleBlur )

//debouncing throttling --> performace improve

// Debouncing ensures a function is executed only after a specified delay has passed since the last time it was called.It's useful for reducing the frequency of events that trigger rapidly, such as typing or window resizing
// Throttling ensures a function is executed at most once in a specified interval, even if the event triggers frequently. It's useful for performance optimization in events like scroll or resize.
