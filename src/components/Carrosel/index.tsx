import "./styles.css";
import React, { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg"

const images = [img1, img3, img4, img5];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // pega até 3 imagens a partir do índice atual
  const visibleImages = [
    images[current],
    images[(current + 1) % images.length],
    images[(current + 2) % images.length],
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${current + index + 1}`}
            className="carousel-image"
          />
        ))}
        <button className="carousel-btn left" onClick={prevSlide}>
          ⬅
        </button>
        <button className="carousel-btn right" onClick={nextSlide}>
          ➡
        </button>
      </div>
      <p className="carousel-counter">
        {current + 1} / {images.length}
      </p>
    </div>
  );
};

export default Carousel;
