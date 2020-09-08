var chooseCountry = document.querySelector('.plan-countries__item--choose');
var chooseCountryButton = document.querySelector('.plan-countries__button-choose-new');
var chooseCountryRightButton = document.querySelector('.plan-countries__flag--choose');
var countryButton = document.querySelector('.flag-icon--place');
var countryCloseButton = document.querySelector('.flag-icon--place-close');
var countryOpenButton = document.querySelector('.flag-icon--place-open');
var countryBlock = document.querySelector('.plan-countries__dropdown-content');


countryButton.addEventListener('click', function() {
  if (countryButton.classList.contains('flag-icon--place-open')) {
    countryButton.classList.remove('flag-icon--place-open');
    countryButton.classList.add('flag-icon--place-close');
    countryBlock.classList.remove('plan-countries__dropdown-content--hidden');
    countryBlock.classList.add('plan-countries__dropdown-content--show');
    chooseCountry.classList.add('plan-countries__item--choose-active');
    chooseCountryRightButton.classList.add('plan-countries__flag--choose-active');
  } else {
    countryButton.classList.add('flag-icon--place-open');
    countryButton.classList.remove('flag-icon--place-close');
    countryBlock.classList.remove('plan-countries__dropdown-content--show');
    countryBlock.classList.add('plan-countries__dropdown-content--hidden');
    chooseCountry.classList.remove('plan-countries__item--choose-active');
    chooseCountry.classList.remove('plan-countries__item--choose-active');
    chooseCountryRightButton.classList.remove('plan-countries__flag--choose-active');
  }
});

chooseCountryButton.addEventListener('click', function() {
  if (chooseCountryButton.classList.contains('plan-countries__button-choose--open')) {
    chooseCountryButton.classList.remove('plan-countries__button-choose--open');
    chooseCountryButton.classList.add('plan-countries__button-choose--close');
    countryBlock.classList.remove('plan-countries__dropdown-content--hidden');
    countryBlock.classList.add('plan-countries__dropdown-content--show');
    chooseCountry.classList.add('plan-countries__item--choose-active');
  } else {
    chooseCountryButton.classList.remove('plan-countries__button-choose--close');
    chooseCountryButton.classList.add('plan-countries__button-choose--open');
    countryBlock.classList.remove('plan-countries__dropdown-content--show');
    countryBlock.classList.add('plan-countries__dropdown-content--hidden');
    chooseCountry.classList.remove('plan-countries__item--choose-active');
    chooseCountryButton.classList.remove('plan-countries__item--choose-active');
  }
});
