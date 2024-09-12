import React, { useEffect, useRef, useState } from 'react';

const FadeSlideInSection = ({ children, className }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current; // Store ref value in a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100), // Array from 0 to 1 with 0.01 intervals
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div
      ref={sectionRef}
      className={`${className} transition-opacity duration-3000 transform ${
        isVisible ? 'animate-fade-slide-in' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeSlideInSection;
