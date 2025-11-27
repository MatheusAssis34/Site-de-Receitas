
import { useState } from "react";
import type { ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  visibleCards?: number;
  width?: string;
  height?: string;
};

export default function Carousel({ children, visibleCards = 3, width = "100%", height }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Array.isArray(children) ? children : [children];

  const prev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const next = () => {
    setCurrentIndex(prev => Math.min(prev + 1, items.length - visibleCards));
  };

  const cardWidth = 270; 

  return (
    <div className="carousel-container" style={{ width, height }}>
      <div className="carousel-wrapper">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {items.map((child, index) => (
            <div key={index} className="carousel-item">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-buttons">
        <button onClick={prev} disabled={currentIndex === 0}>Anterior</button>
        <button onClick={next} disabled={currentIndex >= items.length - visibleCards}>Próximo</button>
      </div>
    </div>
  );
}

