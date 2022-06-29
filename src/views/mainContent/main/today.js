import { myTasks } from "../../../logic/main/ToDo";

export default function getToday(){
    const today = document.createElement('div');
    today.classList.add('main-content');
    today.innerHTML = 'today';

    // myTasks.sort((a, b) => {
    //     return new Date(b.date) - new Date(a.date);
    // });

    console.log('today');

    return today;
}