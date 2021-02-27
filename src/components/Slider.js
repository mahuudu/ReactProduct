import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'http://tkw7.thietkeweb888.com/lobsterbay/wp-content/uploads/2016/12/slideshow_1.jpg',
    altText: 'NowTable x List Nhà Hàng Chay - Ưu Đãi tới 25% ',
    caption: 'Giảm 30% - đặt hàng ngay'
  },
  {
    src : 'http://tkw7.thietkeweb888.com/lobsterbay/wp-content/uploads/2016/12/slideshow_2.jpg',
    altText: 'NowTable Chill & Grill Ưu Đãi 25% ',
    caption: 'Đặt bàn ngay'
  },
  {
     src :'http://tkw7.thietkeweb888.com/lobsterbay/wp-content/uploads/2016/12/slideshow_4.jpg',
    caltText: 'NowTable x DMaris Ưu Đãi 15%',
    caption: 'Đặt bàn ngay'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;