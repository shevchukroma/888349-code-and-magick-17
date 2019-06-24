'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsMock = [];

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
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardsMock[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsMock[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsMock[i].eyeColor;

  similarListElement.appendChild(wizardElement);
}
