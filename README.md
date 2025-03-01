# Frontend-web-tasks
Contains frontend tasks for the Web Developer test, including responsive design, JavaScript to-do app, button animation, and bug fixes.All the tasks code snippet can be easily run by using live server.

This repo contains the follwing Tasks:-

 **Task 1: A Responsive Web Page that displays a header, a navigation menu, a content section with a few paragraphs of text and an image, and a footer.**

**Task2 : A to-do list application build vanilla JavaScript**

**Task3 :A button with a hover effect where the button smoothly changes color and scales when hovered over. The button also have a subtle box-shadow effect.**

**Task6 : In this task the below code snippet is broken.I have find the issues in the below code to make it functional.** 
```bash<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
<title>Broken Test</title>
<script>
function addTask() {
const task = document.getElementById("taskInput").value;
const taskList = document.getElementById("taskList");
const listItem = document.createElement("li");
listItem.innerText = task;
taskList.appendChild(listItem);
}
</script>
</head>
<body>
<input type="text" id="taskInput" />
<button onclick="addTask()">Add Task</button>
<ul id="taskList">
<li>Task 1</li>
<li>Task 2</li>
</ul>
</body>
</html>
```