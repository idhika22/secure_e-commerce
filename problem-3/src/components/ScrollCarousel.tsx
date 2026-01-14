import React, { useRef } from 'react';

type ScrollCarouselProps = {
  children: React.ReactNode[];
};

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

 
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 4; 
      const distance = cardWidth * 4;
      carouselRef.current.scrollBy({ left: direction === 'right' ? distance : -distance, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-4 text-3xl "
      >
        ‹
      </button>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth hide-scrollbar bg-white"
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-3xl"
      >
        ›
      </button>
    </div>
  );
};

export default ScrollCarousel;
