import React, { useEffect, useRef, useState } from "react";

const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-up",
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const baseClasses = "transition-all duration-1000";
  const animationClasses = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10",
    "fade-down": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-10",
    "fade-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-10",
    "fade-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-10",
    "zoom-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    "zoom-out": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105",
  };

  return (
    <div
      ref={sectionRef}
      className={`${baseClasses} ${
        animationClasses[animation] || animationClasses["fade-up"]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
