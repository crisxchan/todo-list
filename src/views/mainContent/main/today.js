/* eslint-disable import/no-cycle */
import { isToday, parseISO } from 'date-fns';
import { myTasks } from '../../../logic/main/ToDo';
import { refreshTasks } from './thingsToDo';

function getTasksToday() {
  const tasksToday = [];

  myTasks.forEach((task) => {
    if (isToday(parseISO(task.date))) {
      tasksToday.push(task);
    }
  });

  return tasksToday;
}

function getToday() {
  const today = document.createElement('div');
  today.dataset.id = 1;
  today.classList.add('main-content');
  const header = document.createElement('h2');
  header.innerHTML = 'Today';

  const tasksToday = getTasksToday();

  today.append(header, refreshTasks(tasksToday, today));

  return today;
}

export { getToday, getTasksToday };
