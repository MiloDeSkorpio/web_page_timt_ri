import React from "react";
import { Navigation, AlertCircle, MapPin } from "lucide-react";
import type { Station } from "../data/types";

interface StationCardProps {
  station: Station;
}

import { StationIcon } from "./icons/StationIcons";

export const StationCard: React.FC<StationCardProps> = ({ station }) => {
  const isActive = station.status === "active";
  const mapUrl = station.coordinates;

  return (
    <div
      className={`rounded-xl border bg-white p-6 shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-105 flex flex-col h-full ${isActive ? "border-gray-200" : "border-dashed border-gray-300 opacity-75"}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="shrink-0">
            <StationIcon
              id={station.id}
              className="w-16 h-16 object-contain drop-shadow-sm"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {station.name}
            </h3>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1.5 ${isActive ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
            >
              {isActive ? "Operativa" : "En Construcción"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-4 grow">
        <div className="flex items-start text-sm text-gray-600">
          <Navigation className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-gray-400" />
          <span>{station.accessType}</span>
        </div>
        {station.accessSecond && (
          <div className="flex items-start text-sm text-gray-600">
            <Navigation className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-gray-400" />
            <span>{station.accessSecond}</span>
          </div>
        )}
        {!isActive && (
          <div className="flex items-start text-sm text-amber-600 bg-amber-50 p-2 rounded">
            <AlertCircle className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
            <span>Tramo de la Fase 2, próxima a inaugurarse.</span>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 hover:bg-timt-bg-light bg-timt-primary text-white hover:text-timt-primary rounded-lg transition-colors font-medium text-sm border border-gray-200 hover:border-timt-primary"
        >
          <MapPin className="w-4 h-4" />
          <span>Ubicación</span>
        </a>
      </div>
    </div>
  );
};
