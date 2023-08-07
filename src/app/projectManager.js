import createElement from "./createElement";
import { openProjectPopup } from "./popupManager";
import renderTasks from "./render";
import { setCurrentTab } from "./tabManager";
import { getTasks } from "./taskManager";

const plus = require("../imgs/plus.svg");

const projectsContainer = document.querySelector(".projects");

export default function renderProjects(projects) {
    projectsContainer.innerHTML = "";
    for (const tab in projects) {
        const container = createElement("div", projectsContainer, "tab");
        const img = createElement("img", container);
        img.src = require("../imgs/list-check.svg");
        createElement("p", container, "", tab);

        container.addEventListener("click", e => {
            const temp = e.target.querySelector("p").textContent
            setCurrentTab(temp);
            renderTasks(getTasks(temp, true), temp);
        })
    }
    renderAddProject();
}

function renderAddProject() {
    const addProject = createElement("div", projectsContainer, "tab");
    addProject.addEventListener("click", openProjectPopup)
    const img = createElement("img", addProject);
    img.src = plus;
    createElement("p", addProject, "", "Add Project");
}