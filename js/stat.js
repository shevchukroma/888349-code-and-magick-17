'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 170;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = CLOUD_HEIGHT - FONT_GAP * 2 - GAP * 4;

var renderCloudWithShadow = function (ctx) {
  ctx.font = "16px PT Mono";
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'white';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP, GAP + FONT_GAP);
  ctx.fillText("Список результатов:", CLOUD_X + GAP + FONT_GAP, GAP * 4);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function getRandomOpacity(redValue, greenValue, blueValue) {
  return 'rgba(' + redValue +', '+ greenValue + ', '+blueValue + ', ' + Math.random() + ')';
};

var renderBar = function (ctx, player, time, x, y, maxTime) {
  var barHeight = MAX_BAR_HEIGHT * (time / maxTime);
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText(player, x, CLOUD_HEIGHT - GAP);
  if (player === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = getRandomOpacity(0, 0, 255);
      }
  ctx.fillRect(x, y + (MAX_BAR_HEIGHT - barHeight) + GAP * 2 + FONT_GAP, BAR_WIDTH, barHeight);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloudWithShadow(ctx);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  
   
  for (var i = 0; i < players.length; i++) {
    renderBar(ctx, players[i], times[i], CLOUD_X + GAP + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_Y + GAP, maxTime);
  }
};
