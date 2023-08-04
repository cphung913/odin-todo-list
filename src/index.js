import "./index.css";
import renderTasks from "./app/render";
import Task from "./app/task";
import { addTask, getTasks, addProject } from "./app/taskManager";

renderTasks(getTasks("home"));
