import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoTIMT from "../../assets/logo_elinsurgente.svg";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/como-funciona", label: "Cómo funciona" },
    { path: "/proyecto", label: "Proyecto" },
    { path: "/guia-usuario", label: "Guía de Usuario" },
    { path: "/reglamento", label: "Reglamento" },
  ];

  return (
    <header className="bg-white/50 backdrop-blur-md shadow-sm sticky top-0 z-50 h-22.5 flex items-center">
      <div className="w-full max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="shrink-0 flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logoTIMT} alt="Logo TIMT" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/centro-ayuda"
            className="group text-white font-semibold bg-timt-primary hover:text-timt-primary hover:bg-white border border-timt-primary px-6 py-1 rounded-full flex items-center justify-between gap-3 transition-all duration-300 shadow-[0_0_8px_rgba(129,49,47,0.5)] hover:shadow-[0_0_8px_rgba(129,49,47,0.5)]"
          >
            <span>Centro de Ayuda</span>
            <svg
              className="w-10 h-10 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                className="fill-white stroke-timt-primary group-hover:fill-timt-primary group-hover:stroke-white transition-colors duration-300"
                strokeWidth="1.5"
              />
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8"
                className="stroke-timt-primary group-hover:stroke-white transition-colors duration-300"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-timt-primary hover:text-white hover:bg-timt-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-timt-primary transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Abrir menú principal</span>
            {!isMobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "text-timt-primary bg-red-50"
                    : "text-gray-700 hover:text-timt-primary hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/centro-ayuda"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                location.pathname === "/centro-ayuda"
                  ? "text-timt-primary bg-red-50"
                  : "text-gray-700 hover:text-timt-primary hover:bg-gray-50"
              }`}
            >
              Centro de Ayuda
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
