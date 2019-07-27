'use strict';

(function () {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  var saveWizards = function (data, onLoad, onError){
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status) {
        try {
          onLoad(xhr.response);
        } catch (err) {
          onError(alert('Error!!!'));
        }
      }
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
  var loadWizards = function (onLoad, onError){
    var URL = 'https://js.dump.academy/code-and-magick/data';
    xhr.addEventListener('load', function () {
      try {
        onLoad(xhr.response);
      } catch (err) {
        onError(alert('Achtung!!!'));
      }
    });
    xhr.open ('GET', URL);
    xhr.send();
  };
  window.backend = {
    save: saveWizards,
    load: loadWizards
  };
})();
