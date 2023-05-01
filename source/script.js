let header = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.main-nav__wrapper')

header.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navList.classList.toggle('main-nav--closed')
});
