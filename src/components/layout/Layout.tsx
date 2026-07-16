import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AlertBanner } from './AlertBanner';
import alertsData from '../../data/alerts.json';
import type { Alert } from '../../data/types';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const activeAlerts = (alertsData as Alert[]).filter(a => a.active);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {activeAlerts.length > 0 && <AlertBanner alerts={activeAlerts} />}
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
