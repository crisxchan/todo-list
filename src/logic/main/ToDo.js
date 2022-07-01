import { addNewCardBtn, refreshTasks } from "../../views/mainContent/main/thingsToDo"
import { getTasksToday } from "../../views/mainContent/main/today"
import { getUpcomingTasks } from "../../views/mainContent/main/upcoming"

let myTasks = [];

class ToDo {
    constructor(title, description, date, priority, status, id){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.status = status;
        this.id = id;
    }
    
    setStatus(status){
        this.status = status;
    }
}

function createNewToDo(title, desc, date, priority){
    let newTask = new ToDo(title, desc, date, priority, false, myTasks.length);
    myTasks.push(newTask);
}

function initTaskStatus(status){
    status.addEventListener('change', (e) => {
        if(status.checked){
            myTasks[e.target.parentElement.dataset.id].setStatus(true);
        } else {
            myTasks[e.target.parentElement.dataset.id].setStatus(false);
        }
    })
}

function initTaskDelete(deleteTask){
    deleteTask.addEventListener('click', (e) => {
        const content = document.querySelector('.main-content');
        let tasksBasedOnContent;
        let index = e.target.parentElement.parentElement.dataset.id;
        myTasks.splice(index, 1);

        for(let i=0; i < myTasks.length; i++){
            myTasks[i].id = i;
        }

        switch(content.dataset.id){
            case '0':
                tasksBasedOnContent = myTasks;
                break;
            case '1':
                tasksBasedOnContent = getTasksToday();
                break;
            case '2': 
                tasksBasedOnContent = getUpcomingTasks();
                break;
        }

        content.appendChild(refreshTasks(tasksBasedOnContent, content));
        if (content.dataset.id == 0) content.appendChild(addNewCardBtn());
    });
}

export { myTasks, createNewToDo, initTaskStatus, initTaskDelete };
