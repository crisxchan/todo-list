import loadPage from './views/viewModule.js'
import initTopBar from './logic/topbar/topBar.js'
import {changeMainDisplay, initTopMenu} from './logic/sidebar/topMenu.js'

/*
topbar
        - hamburger to collapse sidebar
        - home to open sidebar and show Today

todo -  title, description, priority (1-3), 
        checkmark (done status), edit, deadline (date), delete

things to do    (add task at bottom)
today           (add task at bottom)
upcoming        (add task at bottom)

projects        (collapsible) (add project at rightmost)

*/

loadPage();
import { format } from 'path-browserify';
initTopMenu();
initTopBar();



