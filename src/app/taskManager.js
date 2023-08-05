let home = [];
let today = [];
let all = [];
let projects = {};

function addTask(task, path) {
    if (path) {
        projects[path].push(task);
    } else {
        home.push(task);
    }
    all.push(task);
}

function getTasks(path, isProject = false) {
    if (isProject) return projects[path];
    switch (path) {
        case "home":
            return home;
        case "today":
            return today;
        case "all tasks":
            return all;
    }
} 

function addProject(name) {

}

export { addTask, getTasks, addProject };