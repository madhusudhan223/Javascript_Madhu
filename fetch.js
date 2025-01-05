

const options = {
    method: 'get',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
    // body:
}


let apiData = [];
function fetchApi() {
   return  fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then((res) => {
            console.log("res", res)
            return res.json()
        })
        .then((data) => {
            apiData = data;
            // return apiData;
        })
        .catch((error) => console.error("Error fetching data:", error));
}
// const onclick = 
// fetchApi().then(() => {
//     console.log(apiData)
// });

const button = document.getElementById("btn");

button.addEventListener("click", handleClick);

// console.log(button)

const testElement = document.querySelectorAll(".button-class");
console.log(testElement)

function handleClick(){
    fetchApi().then(() => {
        const taskList = document.getElementById("task-list");
        apiData.map((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            listItem.onclick = () => {
                listItem.style.textDecoration = "line-through";
            }
            taskList.appendChild(listItem)
        })
    
});
}

const userInput = document.getElementById("user-input");

const onKeyUp = (event) => {
    if(event.key == "Enter"){
       console.log(userInput.value)
    }
}


userInput.addEventListener("keydown", onKeyUp);

// const onChange = (e) => {
//     console.log(e.key)

// }
// keyup 
// keydown 

// key down ---> keydown will be triggered immediately when key is pressed in keyboard
// key up ---> keyup will be triggered when we release the key


// const userInput = document.getElementById("user-input");
// userInput.addEventListener("keyup", onChange)




// addEventListener("click", myFunction);





