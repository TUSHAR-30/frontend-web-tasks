document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" class="task-checkbox" onclick="toggleTask(this)"> 
    <span>${taskText}</span> 
    <button class="delete-btn" onclick="deleteTask(this)">✖</button>
    `;
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function toggleTask(checkbox) {
    let taskItem = checkbox.parentElement;
    taskItem.classList.toggle("completed");
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").innerText,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" class="task-checkbox" onclick="toggleTask(this)" ${task.completed ? 'checked' : ''}> 
        <span>${task.text}</span> 
        <button class="delete-btn" onclick="deleteTask(this)">✖</button>
        `;
        if (task.completed) li.classList.add("completed");
        taskList.appendChild(li);
    });
}