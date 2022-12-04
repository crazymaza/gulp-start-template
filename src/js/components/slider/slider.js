//Slider with 100vh height, text and right dots
$('.slider__first').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  });

//Slider with center item biggest than other items and arrow
  $('.slider__second').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    centerMode: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 880,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  
  //Slider with section width and height and bottom dots
  $('.slider__third').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  });