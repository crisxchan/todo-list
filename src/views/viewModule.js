import initTopBar from "../logic/topbar/topBar";
import { initTopMenu } from "../logic/sidebar/topMenu";
import getTopIcons from "./topNavIcons/topNavIconsModule";
import getMainContent from "./mainContent/mainContentModule";
import { closeAddCardModal, addTask } from "./mainContent/main/thingsToDo.js"

function loadPage(){
    const body = document.querySelector('body');

    body.append(getModal(), getHeader(), getMain(), getFooter());

    initTopMenu();
    initTopBar();
}

function getModal(){
    const modalWrapper = document.createElement('div');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalHeader = document.createElement('h3');
    modalHeader.innerHTML = 'Add Task';
    const modalBody = document.createElement('form');
    modalBody.setAttribute('id', 'modal-body')
    modalBody.method = '';
    modalBody.addEventListener('submit', addTask);

    const title = document.createElement('input');
    title.id = 'task-title';
    title.type = 'text';
    title.placeholder = 'Task Title'
    title.required = true;

    const description = document.createElement('input');
    description.id = 'task-desc';
    description.type = 'text';
    description.placeholder = 'Description'

    const date = document.createElement('input');
    date.id = 'task-due';
    date.type = 'date';

    const priorityWrapper = document.createElement('div');
    priorityWrapper.setAttribute('id', 'priority-wrapper');

    const prio1Wrapper = document.createElement('div');
    prio1Wrapper.classList.add('priority-wrapper')
    const labelPrio1 = document.createElement('label');
    labelPrio1.setAttribute('for', "prio-low");
    labelPrio1.innerHTML = "low";
    const priority1 = document.createElement('input');
    priority1.type = 'radio';
    priority1.name = 'priority';
    priority1.checked = 'true';
    priority1.id = 'prio-low';
    prio1Wrapper.append(priority1, labelPrio1);

    const prio2Wrapper = document.createElement('div');
    prio2Wrapper.classList.add('priority-wrapper')
    const labelPrio2 = document.createElement('label');
    labelPrio2.setAttribute('for', "prio-medium");
    labelPrio2.innerHTML = "medium";
    const priority2 = document.createElement('input');
    priority2.type = 'radio';
    priority2.name = 'priority';
    priority2.id = 'prio-medium';
    prio2Wrapper.append(priority2, labelPrio2);

    const prio3Wrapper = document.createElement('div');
    prio3Wrapper.classList.add('priority-wrapper')
    const labelPrio3 = document.createElement('label');
    labelPrio3.setAttribute('for', "prio-high");
    labelPrio3.innerHTML = "high";
    const priority3 = document.createElement('input');
    priority3.type = 'radio';
    priority3.name = 'priority';
    priority3.id = 'prio-high';
    prio3Wrapper.append(priority3, labelPrio3);

    priorityWrapper.append(prio1Wrapper, prio2Wrapper, prio3Wrapper);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.type = 'submit';
    addTaskBtn.value = 'submit';
    addTaskBtn.innerHTML = 'Add Task';

    modalBody.append(title, description, date, priorityWrapper, addTaskBtn);
    modal.append(modalHeader, modalBody);

    const overlay = document.createElement('div');
    overlay.addEventListener('click', closeAddCardModal);
    overlay.classList.add('overlay');

    modalWrapper.append(modal, overlay);

    return modalWrapper;
}

function getHeader(){
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');

    headerTitle.innerHTML = 'BUHATONON';
    header.append(getTopIcons(), headerTitle);

    return header;
}

function getMain(){
    const main = document.createElement('main');

    main.append(getMainContent());
    
    return main;
}

function getFooter(){
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    const githubLink = document.createElement('a');
    const githubLogo = document.createElement('i');
    
    p.innerHTML = 'Copyright © 2022 crisxchan';

    githubLink.href = 'https://github.com/crisxchan';
    githubLink.target = '_blank';

    githubLogo.classList.add('fa-brands', 'fa-github', 'ghlogo');

    githubLink.append(githubLogo);

    footer.append(p, githubLink);

    return footer;
}    

export default loadPage;

