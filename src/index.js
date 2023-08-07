import "./index.css";
import renderTasks from "./app/render";
import { getTasks, getProjects } from "./app/taskManager";
import { setupTabManager } from "./app/tabManager";
import renderProjects from "./app/projectManager";

setupTabManager();
renderTasks(getTasks("home"), "Home");
renderProjects(getProjects())
