import topMenuList from '../../data/sidebar-top-menu.json5'
import { getThingsToDo } from '../../views/mainContent/main/thingsToDo';
import getToday from '../../views/mainContent/main/today';
import getUpcoming from '../../views/mainContent/main/upcoming';

export default function getActiveMain(){
    let activeMenu;

    topMenuList.topMenus.forEach(menu => {
        if (menu.isActiveState) activeMenu = menu;
    });

    switch(activeMenu.id){
        case 0:
            return getThingsToDo();
        case 1:
            return getToday();
        case 2:
            return getUpcoming();
    }
}