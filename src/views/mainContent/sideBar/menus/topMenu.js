import topMenuList from '../../../../data/sidebar-top-menu.json5';

export default function getTopMenu(){
    const topMenu = document.createElement('ul');
    topMenu.classList.add('top-menu', 'sidebar-menu');
    
    const menus = topMenuList.topMenus;

    menus.forEach(menu => {
        topMenu.appendChild(createTopMenuCard(menu));
    })

    return topMenu;
}

function createTopMenuCard(menu){
    const menuCard = document.createElement('div');
    const leftWrapper = document.createElement('div');
    const menuLabel = document.createElement('li');
    const icon = document.createElement('i');
    const quantity = document.createElement('div');

    icon.classList.add('fa-solid', menu.icon);
    menuLabel.innerHTML = menu.label;
    quantity.innerHTML = menu.quantity;
    quantity.classList.add('quantity');

    leftWrapper.append(icon, menuLabel);
    leftWrapper.classList.add('lw-menu-card');

    menuCard.append(leftWrapper, quantity);
    menuCard.classList.add('top-menu-card', 'menu-card');
    if(menu.isActiveState) menuCard.classList.add('active');

    menuCard.dataset.id = menu.id;

    return menuCard;
}


