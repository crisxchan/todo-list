import topMenuList from '../../data/sidebar-top-menu.json5'
import getActiveMain from '../main/getActiveMain';

function initTopMenu(){
    const topMenuOptions = document.querySelectorAll('.top-menu-card');

    topMenuOptions.forEach(option => {
        option.addEventListener('click', changeMainDisplay.bind(this, topMenuOptions, option));
    });
}

function changeMainDisplay(topMenuOptions, option){
    const mainWrapper = document.querySelector('.main-wrapper')
    const currentMainContent = document.querySelector('.main-content');
    mainWrapper.removeChild(currentMainContent);
    
    topMenuOptions.forEach(option => option.classList.remove('active'));

    // update JSON
    topMenuList.topMenus.forEach(menu => {
        if(menu.id == option.dataset.id) menu.isActiveState = true;
        else menu.isActiveState = false;
    });

    mainWrapper.appendChild(getActiveMain());
    option.classList.add('active');
}

export { initTopMenu, changeMainDisplay };