import createElement from "./createElement";
import openTaskPopup from "./popupManager";
const plus = require("../imgs/plus.svg");

const main = document.querySelector(".main");

export default function renderTasks(tasksArray) {
    main.innerHTML = "";
    createElement("h2", main, "", "Home")
    tasksArray.forEach(element => {
        const task = createElement("div", main, "task");
        const priority = createElement("div", task, "priority");
        priority.classList.add("p" + element.priority);
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

    addTask.addEventListener("click", openTaskPopup);
}