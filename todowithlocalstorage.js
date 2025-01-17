
const button = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-box");
const clearBtn = document.getElementById("clearBtn")

const tasks = [];

const deleteTask = (deleteId) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const filteredArray = tasks.filter(item => item.id !== deleteId);
    localStorage.setItem("tasks", JSON.stringify(filteredArray));

}
const addTask = () => {
    const listItem = document.createElement("li");
    listItem.innerText = inputBox.value;
    const obj = {
        id: Date.now(),
        textName: inputBox.value,
    }
     tasks.push(obj)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    

    listItem.classList.add("listItem");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.onclick = () => {
        list.removeChild(listItem);
        deleteTask(obj.id)
    }
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem)
    inputBox.value = "" ;
}


const handleClick = () => {
    addTask();
}

const handleInput = (event) => {
    if (event.key == "Enter") {
        addTask();
    }
}
const handleClearAll = () => {
    list.innerHTML = ''
}

function displayTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for(let task of tasks){
        const listItem = document.createElement("li");
        listItem.innerText = task.textName;
        listItem.classList.add("listItem");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.onclick = () => {
            list.removeChild(listItem);
            deleteTask(task.id)
        }
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem)
 }
    
}


inputBox.addEventListener("keydown", handleInput);
clearBtn.addEventListener("click", handleClearAll);
button.addEventListener("click", handleClick);

window.onload = displayTasks