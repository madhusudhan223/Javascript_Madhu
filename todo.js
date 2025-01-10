
const button = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-box");
const clearBtn = document.getElementById("clearBtn")


const addTask = () =>{
    const listItem = document.createElement("li");
    listItem.innerText = inputBox.value;
    listItem.classList.add("listItem");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.onclick = () => {
        list.removeChild(listItem)
    }
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem)
}


const handleClick = () => {
    addTask();
}

const handleInput = (event) => {
    if (event.key == "Enter"){
        addTask();
    }
}
const handleClearAll = () =>{
    list.innerHTML = ''
}

inputBox.addEventListener("keydown", handleInput);
clearBtn.addEventListener("click", handleClearAll);




button.addEventListener("click", handleClick);