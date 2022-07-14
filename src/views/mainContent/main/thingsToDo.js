/* eslint-disable eqeqeq */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import getCard from './card';
import { myTasks, createNewToDo } from '../../../logic/main/ToDo';
import topMenuList from '../../../data/sidebar-top-menu.json5';
import { refreshTaskQuantity } from '../sideBar/menus/topMenu';
import { getTasksToday } from './today';
import { getUpcomingTasks } from './upcoming';

function openAddCardModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeAddCardModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function addNewCardBtn() {
  // eslint-disable-next-line no-shadow
  const addNewCardBtn = document.createElement('div');
  const addTextHolder = document.createElement('div');
  const addIcon = document.createElement('i');

  addIcon.classList.add('fa-solid', 'fa-plus');
  addTextHolder.innerHTML = 'Add task';

  addNewCardBtn.append(addIcon, addTextHolder);

  addNewCardBtn.classList.add('add-new-card');

  addNewCardBtn.addEventListener('click', openAddCardModal);

  return addNewCardBtn;
}

function refreshTasks(tasks, thingsToDo) {
  const tasksWrapper = document.createElement('div');
  tasksWrapper.setAttribute('id', 'task-wrapper');
  // eslint-disable-next-line no-param-reassign
  thingsToDo.innerHTML = '';

  const menus = topMenuList.topMenus;
  menus[0].quantity = myTasks.length;
  menus[1].quantity = getTasksToday().length;
  menus[2].quantity = getUpcomingTasks().length;

  refreshTaskQuantity(thingsToDo.dataset.id, menus);

  tasks.forEach((task) => {
    const taskCard = getCard(task.title, task.description, task.date, task.priority, task.status);
    taskCard.dataset.id = task.id;
    tasksWrapper.appendChild(taskCard);
  });

  if (tasks.length === 0) {
    const nothingToDo = document.createElement('h5');
    nothingToDo.innerHTML = 'Well, seems like the list is empty...';

    tasksWrapper.append(nothingToDo);
  }

  return tasksWrapper;
}

function addTask(e) {
  e.preventDefault();
  const title = document.querySelector('#task-title').value;
  const desc = document.querySelector('#task-desc').value;
  const date = document.querySelector('#task-due').value;

  let priority;

  if (document.querySelector('#prio-low').checked == true) priority = 'low';
  else if (document.querySelector('#prio-medium').checked == true) priority = 'medium';
  else if (document.querySelector('#prio-high').checked == true) priority = 'high';

  document.querySelector('#task-title').value = '';
  document.querySelector('#task-desc').value = '';
  document.querySelector('#task-due').value = '';
  document.querySelector('#prio-low').checked = true;
  document.querySelector('#prio-medium').checked = false;
  document.querySelector('#prio-high').checked = false;

  createNewToDo(title, desc, date, priority);

  const thingsToDo = document.querySelector('.main-content');

  thingsToDo.append(refreshTasks(myTasks, thingsToDo), addNewCardBtn());

  closeAddCardModal();
}

function getThingsToDo() {
  const thingsToDo = document.createElement('div');
  thingsToDo.dataset.id = 0;
  thingsToDo.classList.add('main-content');
  const header = document.createElement('h2');
  header.innerHTML = 'All things to do';

  thingsToDo.append(header, refreshTasks(myTasks, thingsToDo), addNewCardBtn());

  return thingsToDo;
}

export {
  getThingsToDo, closeAddCardModal, addTask, addNewCardBtn, refreshTasks,
};
