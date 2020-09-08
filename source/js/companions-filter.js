var filterCompanionsButton = document.querySelector('.filter-section__button');
var filterCompanionsContent = document.querySelector('.filter-section__list');

filterCompanionsButton.addEventListener('click', function() {
  if (filterCompanionsButton.classList.contains('filter-section__button--open')) {
    filterCompanionsButton.classList.remove('filter-section__button--open');
    filterCompanionsButton.classList.add('filter-section__button--close');
    filterCompanionsContent.classList.remove('filter-section__list--blocked');
  } else {
    filterCompanionsButton.classList.remove('filter-section__button--close');
    filterCompanionsButton.classList.add('filter-section__button--open');
    filterCompanionsContent.classList.add('filter-section__list--blocked');
  }
});
