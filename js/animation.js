'use strict';

(function () {
  var pageHeaderBlockHeight = document.querySelector('.page-header').clientHeight;
  var pageMainBlockHeight = document.querySelector('.page-main__linear-wrapper').clientHeight;
  var experienceBlockHeight = document.querySelector('.experience').clientHeight;
  var goalsBlockHeight = document.querySelector('.my-goals__wrapper').clientHeight;
  var technologiesBlockHeight = document.querySelector('.technologies').clientHeight;

  var greetingBlock = document.querySelector('.animation-greetings');

  var greetingBlockAnimation = function () {
    headerBack.classList.remove('animation-greetings');
    greetingBlock.classList.toggle('page-header__greeting-wrapper');
  }

  var headerBack = document.querySelector('.animation-header-background');

  function headerBackAnimation () {
    headerBack.classList.remove('animation-header-background');
    headerBack.classList.add('page-header__wrapper');
  }

  window.addEventListener('load', greetingBlockAnimation);
  window.addEventListener('load', headerBackAnimation);

  var goalHTML = document.querySelector('.my-goals__tech-skill-animation-html');
  var goalCSS = document.querySelector('.my-goals__tech-skill-animation-css');
  var goalJS = document.querySelector('.my-goals__tech-skill-animation-js');
  var goalAJ = document.querySelector('.my-goals__tech-skill-animation-aj');
  var goalPP = document.querySelector('.my-goals__tech-skill-animation-pp');

  var scrollFix = 150;

  function goalsAnimation () {
    var scrolled = window.pageYOffset;
    var coords = pageHeaderBlockHeight + pageMainBlockHeight + experienceBlockHeight - scrollFix;

    if (scrolled >= coords) {
      goalHTML.classList.remove('my-goals__tech-skill-animation-html');
      goalCSS.classList.remove('my-goals__tech-skill-animation-css');
      goalJS.classList.remove('my-goals__tech-skill-animation-js');
      goalAJ.classList.remove('my-goals__tech-skill-animation-aj');
      goalPP.classList.remove('my-goals__tech-skill-animation-pp');

      goalHTML.classList.add('my-goals__tech-skill-visual-already--html');
      goalCSS.classList.add('my-goals__tech-skill-visual-already--css');
      goalJS.classList.add('my-goals__tech-skill-visual-already--js');
      goalAJ.classList.add('my-goals__tech-skill-visual-already--ajax');
      goalPP.classList.add('my-goals__tech-skill-visual-already--pp');
    }
  }

  window.addEventListener('scroll', goalsAnimation);


  var portfolioSite = document.querySelectorAll('.portfolio__item');

  function portfolioAnimation () {
    var scrolled = window.pageYOffset;
    var coords = pageHeaderBlockHeight + pageMainBlockHeight +
    experienceBlockHeight + goalsBlockHeight + technologiesBlockHeight - scrollFix * 2;

    if (scrolled > coords) {
      for (var i = 0; i < portfolioSite.length; i++) {
        portfolioSite[i].classList.remove('portfolio-animation');
      }
    }
  }

  window.addEventListener('scroll', portfolioAnimation);
})();
