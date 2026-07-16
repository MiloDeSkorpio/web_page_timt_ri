
import { SEO } from "../components/SEO";
import { Hero } from "../sections/Hero";
import { Benefits } from "../sections/Benefits";
import { RouteMap } from "../sections/RouteMap";
import { Button } from "../ui/Button";
import imgTren from "../assets/tren_full.svg";
import imgItre from "../assets/elinsurgente105.webp";
import imgItreSet from "../assets/elinsurgente105.webp?w=400;800;1200&format=webp&as=srcset";
import imgOper from "../assets/elinsurgente114.webp";
import imgOperSet from "../assets/elinsurgente114.webp?w=400;800;1200&format=webp&as=srcset";
import imgVwal from "../assets/elinsurgente2.webp";
import imgVwalSet from "../assets/elinsurgente2.webp?w=400;800;1200&format=webp&as=srcset";
import imgEsca from "../assets/elinsurgente98.webp";
import imgEscaSet from "../assets/elinsurgente98.webp?w=400;800;1200&format=webp&as=srcset";
import imgAsre from "../assets/elinsurgente124.webp";
import imgAsreSet from "../assets/elinsurgente124.webp?w=400;800;1200&format=webp&as=srcset";
import imgLtre from "../assets/elinsurgente127.webp";
import imgLtreSet from "../assets/elinsurgente127.webp?w=400;800;1200&format=webp&as=srcset";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Home() {
  const { isVisible, elementRef: sectionRef } = useIntersectionObserver();

  return (
    <>
      <SEO title="Inicio" description="Sitio oficial del Tren El Insurgente. Conoce los beneficios, el proyecto y toda la información para tu viaje." />

      <Hero />
      <Benefits />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div
          ref={sectionRef}
          className="bg-timt-bg rounded-4xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-3 shadow-lg overflow-hidden"
        >
          <div className="w-full md:w-2/3 flex justify-center md:justify-start">
            <img
              src={imgTren}
              alt="img_tren"
              className={`w-full max-w-70 sm:max-w-md md:max-w-[85%] lg:max-w-none transform scale-125 sm:scale-100 lg:scale-110 md:origin-left opacity-0 ${isVisible ? "animate-slide-in" : ""}`}
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end z-10">
            <Button to="/como-funciona" className="w-full sm:w-auto">
              Conoce más
            </Button>
          </div>
        </div>
      </div>
      <RouteMap />
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <img
            src="/icon-1.svg"
            alt="ico_timt"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <h1 className="text-3xl md:text-4xl text-center text-timt-text">
            Beneficios de{" "}
            <span className="text-timt-text font-bold">El Insurgente</span>
          </h1>
        </div>
        <div className="flex flex-row h-[50vh] md:h-[60vh] min-h-75 w-full">
          {[
            { id: 1, src: imgItre, srcSet: imgItreSet, alt: "img_tren", title: "Costo" },
            { id: 2, src: imgOper, srcSet: imgOperSet, alt: "img_itre", title: "Rapidez" },
            { id: 3, src: imgVwal, srcSet: imgVwalSet, alt: "img_ccop", title: "Seguridad" },
            { id: 4, src: imgEsca, srcSet: imgEscaSet, alt: "img_esca", title: "Conectividad" },
            { id: 5, src: imgAsre, srcSet: imgAsreSet, alt: "img_asre", title: "Comodidad" },
          ].map((item) => (
            <div
              key={item.id}
              className="relative flex-1 hover:flex-3 transition-all duration-500 ease-in-out overflow-hidden group cursor-pointer"
            >
              <img
                src={item.src}
                srcSet={item.srcSet}
                sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-timt-primary from-10% via-timt-primary/80 via-70% to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none flex flex-col justify-center items-center p-6 md:p-8 text-center">
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-timt-bg rounded-4xl shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-timt-text">
              El Proyecto
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              El Insurgente es un proyecto estratégico y prioritario del
              Gobierno de México, cuyo objetivo es{" "}
              <strong>
                conectar la Zona Metropolitana de Toluca con el poniente de la
                Ciudad de México,
              </strong>{" "}
              fortaleciendo la movilidad regional.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              El proyecto contempla la{" "}
              <strong>
                construcción de 58 kilómetros de vía doble electrificada
              </strong>
              , de los cuales{" "}
              <strong>
                aproximadamente el 86 % corresponde a viaducto elevado
              </strong>{" "}
              , lo que optimiza los tiempos de traslado y reduce el impacto
              urbano
            </p>
            <Button to="/proyecto" className="mt-2 w-max">
              Conoce más
            </Button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={imgLtre}
              srcSet={imgLtreSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              loading="lazy"
              alt="img_tren"
              className="rounded-3xl object-cover w-full h-auto md:max-h-100 shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
