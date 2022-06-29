export default function getProjectsMenu(){
    const projectMenu = document.createElement('div');
    projectMenu.classList.add('project-menu', 'sidebar-menu');

    projectMenu.appendChild(createProjectsCard());

    return projectMenu;
}

function createProjectsCard(){
    const projectsCard = document.createElement('div');
    const leftWrapper = document.createElement('div');
    const menuLabel = document.createElement('div');
    const icon = document.createElement('i');
    const tailIcon = document.createElement('i');

    menuLabel.innerHTML = 'Projects';
    icon.classList.add('fa-solid', 'fa-greater-than');
    tailIcon.classList.add('fa-solid', 'fa-plus', 'add-project');

    leftWrapper.append(icon, menuLabel);
    leftWrapper.classList.add('lw-menu-card');

    projectsCard.append(leftWrapper, tailIcon);
    projectsCard.classList.add('project-menu-card', 'menu-card');

    return projectsCard;
}