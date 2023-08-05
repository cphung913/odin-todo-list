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
            console.log("yay")
            return today;
        case "all tasks":
            return all;
    }
} 

function addProject(name) {

}

export { addTask, getTasks, addProject, setupToday };