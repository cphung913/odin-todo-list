import { addProject, addTask, getProjects, getTasks } from "./taskManager";
import Task from "./task";
import renderTasks from "./render";
import { getCurrentTab } from "./tabManager";
import renderProjects from "./projectManager";

const taskPopup = document.querySelector(".task-popup");
const taskCloseButton = document.querySelector(".task-close-button");
const taskCreateButton = document.querySelector(".task-create-button");
const taskInputs = document.querySelectorAll(".task-input");
const projectPopup = document.querySelector(".project-popup");
const projectCloseButton = document.querySelector(".project-close-button");
const projectCreateButton = document.querySelector(".project-create-button");
const projectInput = document.querySelector(".project-name")
const overlay = document.querySelector(".overlay");

taskCloseButton.addEventListener("click", closeTaskPopup);
taskCreateButton.addEventListener("click", closeTaskPopup);
projectCloseButton.addEventListener("click", closeProjectPopup);
projectCreateButton.addEventListener("click", closeProjectPopup)

function openTaskPopup() {
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
        const currentTab = getCurrentTab();
        const task = new Task(taskInputs[0].value, `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`, taskInputs[2].value, taskInputs[3].value);
        if(currentTab == "home") {
            addTask(task);
            renderTasks(getTasks("home"), "Home");
        } else {
            addTask(task, currentTab);
            renderTasks(getTasks(currentTab, true), currentTab);
        }
    }

    overlay.classList.remove("active");
    taskPopup.classList.remove("active");
    taskInputs.forEach(x => x.value = "");
    taskInputs[3].value = "none";
}

function openProjectPopup() {
    overlay.classList.add("active"); 
    projectPopup.classList.add("active");
}

function closeProjectPopup(e) {
    e.preventDefault();
    projectInput.classList.remove("error");
    if(e.target.className != "project-close-button") {
        if (projectInput.value == "") {
            projectInput.classList.add("error");
            window.alert("Project Name Cannot Be Empty");
            return;
        }
        if (addProject(projectInput.value)) {
            projectInput.classList.add("error");
            window.alert("Enter A New Project Name");
            return;
        }
        renderProjects(getProjects());
    }

    overlay.classList.remove("active");
    projectPopup.classList.remove("active");
    projectInput.value = "";
}

export { openTaskPopup, openProjectPopup };