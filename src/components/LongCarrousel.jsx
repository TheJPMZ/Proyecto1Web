import React from 'react';
import './LongCarrousel.scss';
import Carousel from 'react-multi-carousel';
import Card from './LongCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6.7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function LongCarrousel() {
  return (
    <div className="BigCarrousel">
      <h2>TRENDING NOW</h2>
      <Carousel
        additionalTransfrom={0}
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr
        infinite={false}
        keyBoardControl
        customTransition="transform .2s cubic-bezier(.25,.46,.45,.94)"
        slidesToSlide={7}
        transitionDuration={200}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding "
      >
        <div className="DeadSpace"> </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </Carousel>
    </div>
  );
}
