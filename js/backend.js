'use strict';

(function () {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  var saveWizards = function (data, onLoad, onError) {
    URL = 'https://js.dump.academy/code-and-magick';
    xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
  var loadWizards = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    
    xhr.timeout = 10000;
    
    xhr.open('GET', URL);
    xhr.send();
  };
  window.backend = {
    save: saveWizards,
    load: loadWizards
  };
})();
