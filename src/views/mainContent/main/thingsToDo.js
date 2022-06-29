import getCard from "./card";
import { myTasks, createNewToDo, loadExistingToDo } from "../../../logic/main/ToDo";

function getThingsToDo(){
    const thingsToDo = document.createElement('div');
    thingsToDo.classList.add('main-content');

    // thingsToDo.append(addNewCardBtn());
    refreshTasks(thingsToDo);

    return thingsToDo;
}

function addNewCardBtn(){
    const addNewCardBtn = document.createElement('div');
    const addTextHolder = document.createElement('div');
    const addIcon = document.createElement('i');
1
    addIcon.classList.add('fa-solid', 'fa-plus');
    addTextHolder.innerHTML = 'Add task';

    addNewCardBtn.append(addIcon, addTextHolder);

    addNewCardBtn.classList.add('add-new-card');

    addNewCardBtn.addEventListener('click', openAddCardModal);

    return addNewCardBtn;
}

function openAddCardModal(){
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeAddCardModal(){
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function addTask(e){
    e.preventDefault();
    const title = document.querySelector('#task-title').value;
    const desc = document.querySelector('#task-desc').value;
    const date = document.querySelector('#task-due').value;

    let priority;

    if(document.querySelector('#prio-low').checked == true) priority = 'low';
    else if(document.querySelector('#prio-medium').checked == true) priority = 'medium';
    else if(document.querySelector('#prio-high').checked == true) priority = 'high';
    
    document.querySelector('#task-title').value = '';
    document.querySelector('#task-desc').value = '';
    document.querySelector('#task-due').value = '';
    document.querySelector('#prio-low').checked = true; 
    document.querySelector('#prio-medium').checked = false;
    document.querySelector('#prio-high').checked = false;

    createNewToDo(title, desc, date, priority);

    refreshTasks();

    closeAddCardModal();
}

function refreshTasks(thingsToDo = document.querySelector('.main-content')){
    thingsToDo.innerHTML = '';

    myTasks.forEach(task => {
        let taskCard = getCard(task.title, task.description, task.date, task.priority, task.status);
        thingsToDo.appendChild(taskCard);
    });
    thingsToDo.appendChild(addNewCardBtn());
}

export { getThingsToDo, closeAddCardModal, addTask }