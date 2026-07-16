import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { root, rootMargin, threshold });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { isVisible, elementRef };
}
