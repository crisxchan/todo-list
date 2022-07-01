import { myTasks } from "../../../logic/main/ToDo";
import { isThisWeek, parseISO } from "date-fns";
import { refreshTasks } from "./thingsToDo";

function getUpcoming(){
    const upcoming = document.createElement('div');
    upcoming.dataset.id = 2;
    upcoming.classList.add('main-content');
    const header = document.createElement('h2');
    header.innerHTML = 'Upcoming';

    let upcomingTasks = getUpcomingTasks();
    
    upcoming.append(header, refreshTasks(upcomingTasks, upcoming));

    return upcoming;
}

function getUpcomingTasks(){
    let upcomingTasks = [];
    
    myTasks.forEach(task => {
        if(isThisWeek(parseISO(task.date))){
            upcomingTasks.push(task);
        }
    });

    return upcomingTasks;
}

export { getUpcoming, getUpcomingTasks };