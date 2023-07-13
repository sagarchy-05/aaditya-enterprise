import React, { useRef } from 'react';
import s from '../styles/Carousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface CarouselProps {
  images: string[];
}

const NewCarousel: React.FC<CarouselProps> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2500,
        },
      },
    ],
  };

  // Function to pause the autoplay when the carousel is hovered
  const handleCarouselHover = (isHovered: boolean) => {
    if (sliderRef.current) {
      if (isHovered) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
    }
  };

  return (
    <div
      id={s.newcarousel}
      onMouseEnter={() => handleCarouselHover(true)}
      onMouseLeave={() => handleCarouselHover(false)}
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div className={s.box} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewCarousel;
