'use strict';

// js код
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const body = document.body;

    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
            burgerMenu.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
}); 