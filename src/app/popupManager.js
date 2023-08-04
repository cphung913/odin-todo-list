import { addTask, getTasks } from "./taskManager";
import Task from "./task";
import renderTasks from "./render";

const taskPopup = document.querySelector(".task-popup");
const taskCloseButton = document.querySelector(".task-close-button");
const taskCreateButton = document.querySelector(".task-create-button");
const taskInputs = document.querySelectorAll(".task-input");
const overlay = document.querySelector(".overlay");

taskCloseButton.addEventListener("click", closeTaskPopup);
taskCreateButton.addEventListener("click", closeTaskPopup)

export default function openTaskPopup() {
    overlay.classList.add("active"); 
    taskPopup.classList.add("active");
}

function closeTaskPopup(e) {
    e.preventDefault();
    taskInputs[0].classList.remove("error");
    taskInputs[1].classList.remove("error");
    if(e.target.className != "task-close-button") {
        if (taskInputs[0].value == "") {
            taskInputs[0].classList.add("error");
            window.alert("Task Name Cannot Be Empty");
            return;
        }
        if (taskInputs[1].value == "") {
            taskInputs[1].classList.add("error");
            window.alert("Task Date Cannot Be Empty");
            return;
        }
        const dateArray = taskInputs[1].value.split("-");
        addTask(new Task(taskInputs[0].value, `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`, taskInputs[2].value, taskInputs[3].value));
        renderTasks(getTasks("home"));
    }

    overlay.classList.remove("active");
    taskPopup.classList.remove("active");
    taskInputs.forEach(x => x.value = "");
    taskInputs[3].value = "none";
}