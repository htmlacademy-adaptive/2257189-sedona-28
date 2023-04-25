let navMain = document.querySelector('.main-nav__wrapper');
let navToggle = document.querySelector('.main-nav__toggle');
let navToggleClose = document.querySelector('.main-nav__toggle-close')

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    } else {
    navMain.classList.add('main-nav--closed');
  }
});

navToggleClose.addEventListener('click', function () {
   navMain.classList.add('main-nav--closed');
  }
);
