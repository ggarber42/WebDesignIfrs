function hoverEnter() {
    // background.classList.add('.hover');
    console.log('aqui');
}

function hoverLeave() {
    
}
const background = document.querySelector('.background');
const menus = document.querySelectorAll('.bottom li');
menus.forEach(menu => menu.addEventListener('mouseenter', hoverEnter));
menus.forEach(menu => menu.addEventListener('mouseleave', hoverLeave));