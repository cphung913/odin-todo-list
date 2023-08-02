import "./index.css";
import renderTasks from "./app/render";
import Task from "./app/task";
import { addTask, getTasks, addProject } from "./app/taskManager";

addTask(new Task("Yay", "08/17/23", "cool", "4"));
addTask(new Task("Boo", "02/13/25", "bad", "8"));
addTask(new Task("hmm", "07/16/25", "alright", "9"));


renderTasks(getTasks("homenp"));