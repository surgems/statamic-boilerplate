import './animations'

// BURGER MENU TOGGLE

const burgers = document.getElementsByClassName("burger");
const menu = document.getElementById('mob-menu');

for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", function() {
        this.children[0].classList.toggle('open')
        menu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
};