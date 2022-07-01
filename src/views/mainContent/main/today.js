import { myTasks } from "../../../logic/main/ToDo";
import { refreshTasks} from "./thingsToDo"
import { isToday, parseISO } from "date-fns";

function getToday(){
    const today = document.createElement('div');
    today.dataset.id = 1;
    today.classList.add('main-content');
    today.innerHTML = 'today';

    let tasksToday = getTasksToday();

    today.append(refreshTasks(tasksToday, today));

    return today;
}

function getTasksToday(){
    let tasksToday = [];
    
    myTasks.forEach(task => {
        if(isToday(parseISO(task.date))){
            tasksToday.push(task);
        } 
    });

    return tasksToday;
}

export { getToday, getTasksToday };