import renderTasks from "./render";
import { getTasks } from "./taskManager";

const parent = Array.from(document.querySelectorAll(".a"));

const homeTab = parent[0];
const todayTab = parent[1];
const allTab = parent[2];

let currentTab = "home"

function setupTabManager() {
    homeTab.addEventListener("click", switchTab);
    todayTab.addEventListener("click", switchTab);
    allTab.addEventListener("click", switchTab);
}

function switchTab(e) {
    const tab = e.target.querySelector(".tab-name").textContent.toLowerCase();
    if (currentTab == tab) return;
    renderTasks(getTasks(tab), tab);
    currentTab = tab;
}

function getCurrentTab() {
    return currentTab;
}

export { setupTabManager, getCurrentTab }