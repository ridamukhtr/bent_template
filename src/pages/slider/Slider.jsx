import React, { useRef, useEffect, useState } from 'react';
import '../slider/Slider.css';

function Slider() {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const newPosition = window.scrollY;
    const delta = newPosition - lastScrollY;

    setScrollPosition((prevPosition) => prevPosition - delta);
    setLastScrollY(newPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  return (
    <div className="slider-wrapper">
      <div className="slider" ref={sliderRef}>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
        <div className="item">Work</div>
      </div>
    </div>
  );
}

export default Slider;
