let home = localStorage.getItem("home") ? JSON.parse(localStorage.getItem("home")) : [];
let today = [];
let all = localStorage.getItem("all") ? JSON.parse(localStorage.getItem("all")) : [];
let projects = localStorage.getItem("projects") ? JSON.parse(localStorage.getItem("projects")) : {};

function addTask(task, path) {
    if (path) {
        projects[path].push(task);
        localStorage.setItem("projects", JSON.stringify(projects));
    } else {
        home.push(task);
        localStorage.setItem("home", JSON.stringify(home));
    }
    all.push(task);
    localStorage.setItem("all", JSON.stringify(all));
}

function setupToday() {
    let day = new Date();
    let dd = String(day.getDate()).padStart(2, '0');
    let mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = day.getFullYear();

    day = mm + '/' + dd + '/' + yyyy;

    today = all.filter(x => x.date == day);
    return today;
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
    if (projects[name]) return true;
    projects[name] = [];
    localStorage.setItem("projects", JSON.stringify(projects));
}

function getProjects() {
    return projects;
}

export { addTask, getTasks, addProject, setupToday, getProjects };