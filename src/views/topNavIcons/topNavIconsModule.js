function getBurger() {
  const bars = document.createElement('i');
  bars.classList.add('fa-solid', 'fa-bars', 'nav-icons');

  return bars;
}

function getHome() {
  const home = document.createElement('i');
  home.classList.add('fa-solid', 'fa-house', 'nav-icons');

  return home;
}

function getTopIcons() {
  const icons = document.createElement('nav');
  icons.classList.add('top-nav');

  icons.append(getBurger(), getHome());

  return icons;
}

export default getTopIcons;
