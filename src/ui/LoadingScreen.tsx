import React from 'react';
import { Train } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-timt-bg w-full">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-timt-secondary border-t-timt-primary rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-timt-primary">
          <Train size={32} />
        </div>
      </div>
      <p className="mt-4 text-timt-primary font-medium text-lg animate-pulse">Cargando...</p>
    </div>
  );
};
