import getTopIcons from "./topNavIcons/topNavIconsModule";

function loadPage(){
    const body = document.querySelector('body');

    body.append(getHeader(), getMain(), getFooter());
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

