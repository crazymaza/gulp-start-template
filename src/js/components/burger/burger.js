const burger = $('.nav__mobile');
  const burgerSpan = $('.mobile__btn');
  burger.on('click', () => {
    burger.toggleClass('active');
    burgerSpan.toggleClass('active');
  });