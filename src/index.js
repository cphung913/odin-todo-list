import "./index.css";
import renderTasks from "./app/render";
import { getTasks } from "./app/taskManager";
import { setupTabManager } from "./app/tabManager";

setupTabManager();
renderTasks(getTasks("home"), "Home");
