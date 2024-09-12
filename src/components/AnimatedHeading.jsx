import React, { useEffect, useRef, useState } from 'react';

const AnimatedHeading = ({ children, className }) => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Adjust as needed
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      className={`${className} ${isVisible ? 'animate-jump-in' : 'opacity-0'}`}
    >
      {children}
    </h1>
  );
};

export default AnimatedHeading;
