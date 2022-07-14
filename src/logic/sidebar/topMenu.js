/* eslint-disable no-param-reassign */
import topMenuList from '../../data/sidebar-top-menu.json5';
import getActiveMain from '../main/getActiveMain';

function changeMainDisplay(topMenuOptions, option) {
  const mainWrapper = document.querySelector('.main-wrapper');
  const currentMainContent = document.querySelector('.main-content');
  mainWrapper.removeChild(currentMainContent);

  // eslint-disable-next-line no-shadow
  topMenuOptions.forEach((option) => option.classList.remove('active'));

  // update JSON
  topMenuList.topMenus.forEach((menu) => {
    // eslint-disable-next-line eqeqeq
    if (menu.id == option.dataset.id) menu.isActiveState = true;
    else menu.isActiveState = false;
  });

  mainWrapper.appendChild(getActiveMain());
  option.classList.add('active');
}

function initTopMenu() {
  const topMenuOptions = document.querySelectorAll('.top-menu-card');

  topMenuOptions.forEach((option) => {
    option.addEventListener('click', changeMainDisplay.bind(this, topMenuOptions, option));
  });
}

export { initTopMenu, changeMainDisplay };
