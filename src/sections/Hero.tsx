import React, { useState, useEffect } from "react";
import img110 from "../assets/elinsurgente110.webp";
import img110Set from "../assets/elinsurgente110.webp?w=400;800;1200&format=webp&as=srcset";
import img25 from "../assets/elinsurgente25.webp";
import img25Set from "../assets/elinsurgente25.webp?w=400;800;1200&format=webp&as=srcset";
import img128 from "../assets/elinsurgente128.webp";
import img128Set from "../assets/elinsurgente128.webp?w=400;800;1200&format=webp&as=srcset";

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: img110, srcSet: img110Set, zoom: "center" },
    { id: 2, src: img25, srcSet: img25Set, zoom: "left" },
    { id: 3, src: img128, srcSet: img128Set, zoom: "center" },
    { id: 4, src: img25, srcSet: img25Set, zoom: "center" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gray-900">
      {/* Slider de Fondo */}
      <div className="absolute inset-0 z-0">
        {images.map((img) => (
          <div
            key={img.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              img.id === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="100vw"
              alt={`Fondo Tren El Insurgente ${img.id + 1}`}
              className={`w-full h-full object-cover transform transition-transform ease-linear ${
                img.id === currentIndex ? "scale-110" : "scale-100"
              } ${img.zoom === "left" ? "origin-left" : "origin-center"}`}
              style={{ transitionDuration: "10000ms" }}
              fetchPriority={img.id === 1 ? "high" : "auto"}
              loading={img.id === 1 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* Overlay oscuro para resaltar el contenido y hacer glassmorphism */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/40 z-10"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32 mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Textos */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl drop-shadow-xl">
              <span className="block xl:inline">El Insurgente te lleva</span>{" "}
              <span className="block text-3xl sm:text-4xl mt-4 text-white drop-shadow-md">
                Rápido, seguro y de bajo costo
              </span>
            </h1>
          </div>

          {/* Video de YouTube */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/20 bg-black/50 backdrop-blur-md transform transition-transform hover:scale-[1.02] duration-500">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ofedCos2oNE?autoplay=1&mute=1&loop=1&playlist=ofedCos2oNE"
                title="Video del Tren El Insurgente"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
