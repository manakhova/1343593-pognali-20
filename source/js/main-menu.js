var header = document.querySelector('.page-header');
var headerButton = document.querySelector('.page-header__button');
var headerNav = document.querySelector('.page-header__navigation');
var headerCont = document.querySelector('.page-header__actions');

header.classList.remove('page-header--nojs');

headerButton.addEventListener('click', function() {
  if (headerButton.classList.contains('page-header__button--closed')) {
    header.classList.add('page-header--scroll');
    headerButton.classList.remove('page-header__button--closed');
    headerButton.classList.add('page-header__button--opened');
    headerNav.classList.add('site-navigation--scroll');
    headerCont.classList.add('contacts--scroll');
  } else {
    header.classList.remove('page-header--scroll');
    headerButton.classList.remove('page-header__button--opened');
    headerButton.classList.add('page-header__button--closed');
  }
});
