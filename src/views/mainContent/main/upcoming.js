/* eslint-disable import/no-cycle */
import { isThisWeek, parseISO } from 'date-fns';
import { myTasks } from '../../../logic/main/ToDo';
import { refreshTasks } from './thingsToDo';

function getUpcomingTasks() {
  const upcomingTasks = [];

  myTasks.forEach((task) => {
    if (isThisWeek(parseISO(task.date))) {
      upcomingTasks.push(task);
    }
  });

  return upcomingTasks;
}

function getUpcoming() {
  const upcoming = document.createElement('div');
  upcoming.dataset.id = 2;
  upcoming.classList.add('main-content');
  const header = document.createElement('h2');
  header.innerHTML = 'Upcoming';

  const upcomingTasks = getUpcomingTasks();

  upcoming.append(header, refreshTasks(upcomingTasks, upcoming));

  return upcoming;
}

export { getUpcoming, getUpcomingTasks };
