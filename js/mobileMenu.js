'use strict';

const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');

menu.addEventListener('click', function() {
  menu.classList.toggle('isActive');
  menuLinks.classList.toggle('active');
});