const button = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-box");
const clearBtn = document.getElementById("clearBtn");

// Load existing tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const deleteTask = (deleteId) => {
    tasks = tasks.filter(task => task.id !== deleteId); 
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    displayTasks(); 
};

const addTask = () => {
    const taskText = inputBox.value.trim(); 
    if (taskText === "") return;

    const task = { id: Date.now(), textName: taskText };
    tasks.push(task); 
    localStorage.setItem("tasks", JSON.stringify(tasks)); 

    inputBox.value = ""; 
    displayTasks(); 
};

const handleInput = (event) => {
    if (event.key === "Enter") addTask();
};

const handleClearAll = () => {
    tasks = []; 
    localStorage.removeItem("tasks"); 
    list.innerHTML = ""; 
};

function displayTasks() {
    list.innerHTML = ""; 
    tasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.innerText = task.textName;
        listItem.classList.add("listItem");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.onclick = () => deleteTask(task.id);

        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
    });
}

// Event Listeners
inputBox.addEventListener("keydown", handleInput);
clearBtn.addEventListener("click", handleClearAll);
button.addEventListener("click", addTask);
window.onload = displayTasks; // Load tasks on page load
