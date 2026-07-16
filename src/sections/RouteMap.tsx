import React from "react";
import { StationCard } from "../ui/StationCard";
import stationsData from "../data/stations.json";
import type { Station } from "../data/types";
import imgSeat from "../assets/elinsurgente25.webp";
import imgSeatSet from "../assets/elinsurgente25.webp?w=400;800;1200&format=webp&as=srcset";
import imgStre from "../assets/elinsurgente128.webp";
import imgStreSet from "../assets/elinsurgente128.webp?w=400;800;1200&format=webp&as=srcset";
export const RouteMap: React.FC = () => {
  const stations = stationsData as Station[];

  return (
    <section id="ruta" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2">
            <img src={imgSeat} srcSet={imgSeatSet} sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px" alt="img_seats" className="rounded-2xl shadow-md object-cover w-full sm:w-1/2 h-64" />
            <img src={imgStre} srcSet={imgStreSet} sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px" alt="img_train" className="rounded-2xl shadow-md object-cover w-full sm:w-1/2 h-64" />
          </div>
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Conoce el tren "El Insurgente"
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              El servicio opera con 16 trenes en circulación, a una velocidad
              máxima de 120 km/h, cada uno con una capacidad de hasta 719
              pasajeros.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </div>
    </section>
  );
};
