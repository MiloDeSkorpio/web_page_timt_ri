import React, { useState, useEffect, useRef } from "react";

interface AnimatedNumberProps {
  endValue: number;
  duration?: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  endValue,
  duration = 2000,
}) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (numberRef.current) observer.unobserve(numberRef.current);
        }
      },
      { threshold: 0.1 },
    );

    const el = numberRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue: number = 0;

    const animate = (timestamp: number) => {
      startTime ??= timestamp;

      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOut = percentage * (2 - percentage);
      const current = startValue + (endValue - startValue) * easeOut;

      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, duration, isVisible]);

  const decimals = endValue.toString().split(".")[1]?.length || 0;
  const formattedCount =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return <span ref={numberRef}>{formattedCount}</span>;
};
