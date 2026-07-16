import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface TutorialSliderProps {
  slides: Slide[];
}

export const TutorialSlider: React.FC<TutorialSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full shrink-0 flex flex-col md:flex-row h-auto md:h-112.5"
          >
            {/* Image Section */}
            <div
              className={`w-full md:w-1/2 h-64 md:h-full relative overflow-hidden ${slide.image.includes("rre.jpg") ? "bg-white" : "bg-gray-100"}`}
            >
              <img
                src={new URL(`../../assets/${slide.image}`, import.meta.url).href}
                alt={slide.title}
                className={`w-full h-full ${slide.image.includes("rre.jpg") ? "object-contain p-4" : "object-cover"}`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent md:hidden" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-timt-primary/10 text-timt-primary mb-6">
                <span className="text-xl font-bold">{slide.id}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {slide.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-32 md:top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-timt-primary/80 backdrop-blur shadow-md flex items-center justify-center text-white hover:text-timt-primary hover:bg-white hover:border-2 hover:border-timt-primary transition-all z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-32 md:top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-timt-primary/80 backdrop-blur shadow-md flex items-center justify-center text-white hover:text-timt-primary hover:bg-white hover:border-2 hover:border-timt-primary transition-all z-10"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-timt-primary w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
