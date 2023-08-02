import createElement from "./createElement";
const plus = require("../imgs/plus.svg");

const main = document.querySelector(".main");

export default function renderTasks(tasksArray) {
    tasksArray.forEach(element => {
        const task = createElement("div", main, "task");
        createElement("p", task, "", element.title);
        createElement("p", task, "date", element.date);
    })
    renderAddTask();
}

function renderAddTask() {
    const addTask = createElement("div", main, "add");
    const img = createElement("img", addTask, "plus");
    img.src = plus;
    createElement("p", addTask, "", "Add Task");

    addTask.addEventListener("click");
}