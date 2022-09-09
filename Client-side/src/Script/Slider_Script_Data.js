// Home page slider

const sliderSetting = () => { 
  const HeroSlideSetting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    easing: "fade",
    adaptiveHeight: true,
  };
  const TestimonialSliderSetting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    easing: "fade",
    adaptiveHeight: true,
  };
  const Slider_Project_setting = {
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    easing: "fade",
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return { HeroSlideSetting, TestimonialSliderSetting, Slider_Project_setting };
};

export default sliderSetting;
