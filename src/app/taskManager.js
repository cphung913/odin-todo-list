let home = [];
let today = [];
let all = [];
let projects = {};

function addTask(task, path, isProject = false) {
    if (isProject) {
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
        case "all":
            return all;
    }
} 

function addProject(name) {

}

export { addTask, getTasks, addProject };