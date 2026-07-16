import React from "react";
import { SEO } from "../components/SEO";
import { TutorialSlider } from "../components/ui/TutorialSlider";
import qrTutorialData from "../data/qrTutorialData.json";
import recsGenerales from "../data/recsGenerales.json";
import tumiTutorialData from "../data/tumiTutorialData.json";
export const GuiaUsuario: React.FC = () => {
  console.log(qrTutorialData.length);
  return (
    <>
      <SEO
        title="Guía de Usuario - Tren El Insurgente"
        description="Aprende cómo usar los boletos QR y la tarjeta TUMI en el Tren El Insurgente. Guía paso a paso desde la compra hasta la salida."
      />

      {/* Header Section */}
      <section className="bg-timt-bg py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guía de Usuario
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bienvenido a nuestra guía rápida.Aquí te explicamos paso a paso cómo
            adquirir y utilizar tus boletos QR y tarjeta TUMI para un viaje
            seguro y ágil.
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recomendaciones Generales
            </h2>
            <div className="w-24 h-1 bg-timt-primary mx-auto rounded-full"></div>
          </div>

          <TutorialSlider slides={recsGenerales} />
        </div>
      </section>
      {/* Slider Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uso de Tarjeta TUMI
            </h2>
            <div className="w-24 h-1 bg-timt-primary mx-auto rounded-full"></div>
          </div>

          <TutorialSlider slides={tumiTutorialData} />
        </div>
      </section>
      {/* Slider Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uso de Boletos QR
            </h2>
            <div className="w-24 h-1 bg-timt-primary mx-auto rounded-full"></div>
          </div>

          <TutorialSlider slides={qrTutorialData} />
        </div>
      </section>
      {/* Additional Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Tienes alguna otra duda?
          </h2>
          <p className="text-gray-600 mb-8">
            Visita nuestro Centro de Ayuda para encontrar respuestas a preguntas
            frecuentes, reglamento completo y más información útil.
          </p>
          <a
            href="/centro-ayuda"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-timt-primary hover:bg-timt-primary/90 transition-colors shadow-lg shadow-timt-primary/30"
          >
            Ir al Centro de Ayuda
          </a>
        </div>
      </section>
    </>
  );
};
