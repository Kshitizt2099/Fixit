import React, { useState, useEffect } from 'react';
import './SlideShow.css'
const Slideshow = ({ images, intervalTime = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Automatic slideshow functionality using useEffect
  useEffect(() => {
    const interval = setInterval(goToNextSlide, intervalTime);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentImageIndex, intervalTime]);

  return (
    <div className="Left">
      
      <img className="slide"src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
     
    </div>
  );
};

export default Slideshow;