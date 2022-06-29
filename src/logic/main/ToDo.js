let myTasks = [];

class ToDo {
    constructor(title, description, date, priority, status){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.status = status;
    }
    
    // setStatus(status){
    //     this.status = status;
    // }
}

function createNewToDo(title, desc, date, priority){
    let newTask = new ToDo(title, desc, date, priority, false);
    myTasks.push(newTask);
}

function loadExistingToDo(){

}


export { myTasks, createNewToDo, loadExistingToDo };
