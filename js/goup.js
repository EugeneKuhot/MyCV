'use strict';

(function () {
  var goTopBtn = document.querySelector('.backToTop');

  function trackScroll () {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('backToTop-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('backToTop-show');
    }
  }

  function backToTop () {
    window.scrollTo(0, 0);
  }

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
