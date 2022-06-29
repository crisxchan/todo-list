import {changeMainDisplay, initTopMenu} from '../sidebar/topMenu.js'

export default function initTopBar(){
    const barsIcon = document.querySelector('.fa-bars');
    const homeIcon = document.querySelector('.fa-house');

    barsIcon.addEventListener('click', toggleSideBar);
    homeIcon.addEventListener('click', focusToHome);
}

function toggleSideBar(){
    const sidebar = document.querySelector('.sidebar');

    if(sidebar.classList.contains('active')) sidebar.classList.remove('active');
    else sidebar.classList.add('active');
}

function focusToHome(){
    const topMenuOptions = document.querySelectorAll('.top-menu-card');
    const home = document.querySelector('[data-id="0"]');
    changeMainDisplay(topMenuOptions, home);
}