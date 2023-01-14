// This script solve the popular problem when 100vh doesn’t fit the mobile browser screen (work with PostCSS plugin)
const customViewportCorrectionVariable = 'vh';

function setViewportProperty(doc) {
  let prevClientHeight;
  const customVar = '--' + (customViewportCorrectionVariable || 'vh');

  function handleResize() {
    let clientHeight = doc.clientHeight;
    if (clientHeight === prevClientHeight) return;
    requestAnimationFrame(function updateViewportHeight() {
      doc.style.setProperty(customVar, clientHeight * 0.01 + 'px');
      prevClientHeight = clientHeight;
    });
  }
  handleResize();
  return handleResize;
}

window.addEventListener('resize', setViewportProperty(document.documentElement));

// Place your jQuery code here.
$(function () {
  // Load SVG-sprite on IE
  svg4everybody();

  const burger = $('.nav__mobile');
  const burgerSpan = $('.mobile__btn');
  burger.on('click', () => {
    burger.toggleClass('active');
    burgerSpan.toggleClass('active');
  });
  // Micromodal example init
  // MicroModal.init({
  //   disableScroll: true,
  //   awaitOpenAnimation: true,
  //   awaitCloseAnimation: true,
  // });

  console.log('DOM loaded');
});

(function ($) {
  $(window).on("load", function () {
    $("a[href*='#']").mPageScroll2id();
  });
})(jQuery);

ScrollReveal().reveal('#card__content', {
  delay: 250,
  easing: 'ease-in',
});
ScrollReveal().reveal('.content__text_join', {
  delay: 250,
  distance: '50%',
  origin: 'right',
  easing: 'ease-in',
});
ScrollReveal().reveal('.scales', {
  delay: 250,
  distance: '50%',
  origin: 'right',
  easing: 'ease-in',
});
ScrollReveal().reveal('.section__title', {
  delay: 250,
  easing: 'ease-in',
});
ScrollReveal().reveal('.description', {
  delay: 270,
  easing: 'ease-in',
});
ScrollReveal().reveal('.block__img', {
  delay: 250,
  distance: '-50%',
  easing: 'ease-in',
});
ScrollReveal().reveal('.title', {
  delay: 250,
  distance: '-50%'
});
ScrollReveal().reveal('.join-form', {
  delay: 250,
  distance: '50%',
  easing: 'ease-in',
});