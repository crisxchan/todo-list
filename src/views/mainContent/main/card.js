// eslint-disable-next-line import/no-cycle
import { initTaskStatus, initTaskDelete } from '../../../logic/main/ToDo';

export default function getCard(cardTitle, cardDesc, cardDate, cardPriority, cardStatus) {
  const card = document.createElement('div');
  card.classList.add('todo-card');

  const title = document.createElement('h2');
  title.style.lineHeight = '0px';
  title.innerHTML = cardTitle;

  const description = document.createElement('p');
  description.style.lineHeight = '0px';
  description.style.fontSize = '0.8rem';
  description.innerHTML = cardDesc;

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  textWrapper.append(title, description);

  const priority = document.createElement('div');
  priority.classList.add('priority', cardPriority);

  const status = document.createElement('input');
  status.checked = cardStatus;
  status.type = 'checkbox';
  status.classList.add('status');
  initTaskStatus(status);

  const tailingDiv = document.createElement('div');

  const date = document.createElement('p');
  date.style.fontSize = '0.8rem';
  date.style.color = 'grey';
  // eslint-disable-next-line eqeqeq, no-param-reassign
  cardDate = (cardDate == '') ? 'NO DATE' : cardDate;
  date.innerHTML = cardDate;

  const deleteCard = document.createElement('i');
  deleteCard.classList.add('fa-solid', 'fa-trash');
  initTaskDelete(deleteCard);

  tailingDiv.append(date, deleteCard);
  tailingDiv.classList.add('card-tail');

  card.append(status, priority, textWrapper, tailingDiv);

  return card;
}
