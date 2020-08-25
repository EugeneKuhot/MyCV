'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var htmlFirstLevelSmall = document.querySelector('.skills__certificate1');
  var htmlSecondLevelSmall = document.querySelector('.skills__certificate2');
  var jsFirstLevelSmall = document.querySelector('.skills__certificate3');

  var overlay = document.querySelector('.certificate-overlay');

  var htmlFirstLevelBig = document.querySelector('.certificate1');
  var htmlSecondLevelBig = document.querySelector('.certificate2');
  var jsFirstLevelBig = document.querySelector('.certificate3');


  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var closePopup = function (evt) {
    htmlFirstLevelBig.classList.add('hidden');
    htmlSecondLevelBig.classList.add('hidden');
    jsFirstLevelBig.classList.add('hidden');
    overlay.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onDocumentClick = function (evt) {
    if (evt.target != htmlFirstLevelBig) {
      closePopup();
    }
  };

  var getBigCertificate = function (evt) {
    overlay.classList.remove('hidden');

    if (evt.target === htmlFirstLevelSmall) {
      htmlFirstLevelBig.classList.remove('hidden');
    } else  if (evt.target === htmlSecondLevelSmall) {
      htmlSecondLevelBig.classList.remove('hidden');
    } else if (evt.target === jsFirstLevelSmall) {
      jsFirstLevelBig.classList.remove('hidden');
    }

    document.addEventListener('keydown', onPopupEscPress);
  };

  var onCertificatePress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      getBigCertificate();
    }
  };

  htmlFirstLevelSmall.addEventListener('click', getBigCertificate);
  htmlSecondLevelSmall.addEventListener('click', getBigCertificate);
  jsFirstLevelSmall.addEventListener('click', getBigCertificate);

  overlay.addEventListener('click', onDocumentClick);
})();
