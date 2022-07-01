import { myTasks } from "../../../logic/main/ToDo";
import { refreshTasks} from "./thingsToDo"
import { isToday, parseISO } from "date-fns";
import topMenuList from '../../../data/sidebar-top-menu.json5';

function getToday(){
    const today = document.createElement('div');
    today.dataset.id = 1;
    today.classList.add('main-content');
    const header = document.createElement('h2');
    header.innerHTML = 'Today';

    let tasksToday = getTasksToday();

    today.append(header, refreshTasks(tasksToday, today));

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