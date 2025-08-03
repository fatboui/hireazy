import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'slide-up',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      const currentRef = ref.current;
      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [delay]);

  return (
   <div
  ref={ref}
  className={`animate-on-scroll ${isVisible ? `animate ${animation}` : ''} ${className || ''}`}
  style={{ transitionDelay: `${delay || 0}ms` }}
>
  {children}
</div>

  );
};

export default AnimatedSection;