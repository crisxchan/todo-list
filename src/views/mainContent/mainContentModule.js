import getSideBar from './sideBar/sideBarModule';
import getActiveMain from '../../logic/main/getActiveMain';

export default function getMainContent() {
  const mainWrapper = document.createElement('div');
  mainWrapper.classList.add('main-wrapper');

  mainWrapper.append(getSideBar(), getActiveMain());

  return mainWrapper;
}
