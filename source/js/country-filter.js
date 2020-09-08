var filter = document.querySelector('.page-filter');
var filterButton = document.querySelector('.page-filter__button');
var filterCloseButton = document.querySelector('.page-filter__button-close');
var filterButtonIconClosed = document.querySelector('.page-filter__button-icon--closed');
var filterButtonIconOpened = document.querySelector('.page-filter__button-icon--opened');
var filterTitleClosed = document.querySelector('.page-filter__button-title--closed');
var filterTitleOpened = document.querySelector('.page-filter__button-title--opened');

filter.classList.remove('page-filter--nojs');

filterButton.addEventListener('click', function() {
  if (filterButton.classList.contains('page-filter__button--closed')) {
    filter.classList.add('page-filter--scroll');
    filterButton.classList.remove('page-filter__button--closed');
    filterButton.classList.add('page-filter__button--opened');
    filterTitleOpened.classList.remove('page-filter__button-title--blocked');
    filterTitleClosed.classList.add('page-filter__button-title--blocked');
    filterButtonIconOpened.classList.remove('page-filter__button-icon--opened-blocked');
    filterButtonIconClosed.classList.add('page-filter__button-icon--closed-blocked');
  } else {
    filter.classList.remove('page-filter--scroll');
    filterButton.classList.remove('page-filter__button--opened');
    filterButton.classList.add('page-filter__button--closed');
    filterTitleClosed.classList.remove('page-filter__button-title--blocked');
    filterTitleOpened.classList.add('page-filter__button-title--blocked');
    filterButtonIconClosed.classList.remove('page-filter__button-icon--closed-blocked');
    filterButtonIconOpened.classList.add('page-filter__button-icon--opened-blocked');
  }
});

filterCloseButton.addEventListener('click', function() {
  filter.classList.remove('page-filter--scroll');
  filterButton.classList.add('page-filter__button--closed');
  filterTitleClosed.classList.remove('page-filter__button-title--blocked');
  filterButtonIconClosed.classList.remove('page-filter__button-icon--closed-blocked');
  filterButtonIconOpened.classList.add('page-filter__button-icon--opened-blocked');;
  filterTitleOpened.classList.add('page-filter__button-title--blocked');
});
