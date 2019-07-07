'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardsMock = [];
var popup = document.querySelector('.setup');
var popupOpen = document.querySelector('.setup-open');
var popupClose = popup.querySelector('.setup-close');
var icon = document.querySelector('.setup-open-icon');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEye = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var input = document.querySelector('.setup-user-name');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

function openPopup() {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

function closePopup() {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

icon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.target !== input && evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});

popupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

popupOpen.addEventListener('click', function () {
  openPopup();
});

popupClose.addEventListener('click', function () {
  closePopup();
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomInt(COAT_COLORS.length)];
});

wizardEye.addEventListener('click', function () {
  wizardEye.style.fill = EYES_COLORS[getRandomInt(EYES_COLORS.length)];
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = FIREBALL_COLORS[getRandomInt(FIREBALL_COLORS.length)];
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getWizards() {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var name = WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)];
    var coatColor = COAT_COLORS[getRandomInt(COAT_COLORS.length)];
    var eyeColor = EYES_COLORS[getRandomInt(EYES_COLORS.length)];
    wizards.push({name: name, coatColor: coatColor, eyeColor: eyeColor});
  }

  return wizards;
}
wizardsMock = getWizards();

for (var i = 0; i < 4; i++) {
  var wizard = similarWizardTemplate.cloneNode(true);

  wizard.querySelector('.setup-similar-label').textContent = wizardsMock[i].name;
  wizard.querySelector('.wizard-coat').style.fill = wizardsMock[i].coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = wizardsMock[i].eyeColor;

  similarList.appendChild(wizard);
}
