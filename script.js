const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.humburgur-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}