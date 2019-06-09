'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 170;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - GAP;

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

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloudWithShadow(ctx);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT);
    ctx.fillRect(CLOUD_X + GAP + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  };
};