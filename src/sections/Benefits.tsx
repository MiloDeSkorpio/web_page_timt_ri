import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
// Componentes de iconos SVG personalizados.
// Aquí puedes reemplazar el contenido <svg>...</svg> por los tuyos.
const IconSchedule = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
    {...props}
  >
    <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48H432 400 288 48V448c0 8.8 7.2 16 16 16H284.5c12.3 18.8 28 35.1 46.3 48H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304c0-8.8-7.2-16-16-16z"></path>
  </svg>
);

const IconCost = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M256 304c64 0 119.6-14.7 157.5-36c39.4-22.2 50.5-45.3 50.5-60s-11.1-37.8-50.5-60C375.6 126.7 320 112 256 112s-119.6 14.7-157.5 36C59.1 170.2 48 193.3 48 208s11.1 37.8 50.5 60c37.9 21.3 93.5 36 157.5 36zM0 208C0 128.5 114.6 64 256 64s256 64.5 256 144l0 48 0 64c0 70.7-114.6 128-256 128S0 390.7 0 320l0-64 0-48zM256 352c-13.6 0-27-.6-40-1.7l0 48c12.9 1.1 26.3 1.7 40 1.7s27.1-.6 40-1.7l0-48c-13 1.1-26.4 1.7-40 1.7zM120 330l0 47.7c18.7 7 40.3 12.7 64 16.6l0-48.1c-22.8-3.8-44.3-9.2-64-16.2zM88 316.7C73 309.3 59.6 301 48 292l0 28c0 6.8 6.2 24.2 40 43.1l0-46.5zm240 29.6l0 48.1c23.7-3.9 45.3-9.6 64-16.6l0-47.7c-19.7 7-41.2 12.5-64 16.2zM464 320l0-28c-11.6 9.1-25 17.4-40 24.7l0 46.5c33.8-18.9 40-36.3 40-43.1z"></path>
  </svg>
);

const IconAccess = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
    {...props}
  >
    <path d="M64 64C28.7 64 0 92.7 0 128v60.1c0 10.2 6.4 19.2 16 22.6c18.7 6.6 32 24.4 32 45.3s-13.3 38.7-32 45.3c-9.6 3.4-16 12.5-16 22.6V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V323.9c0-10.2-6.4-19.2-16-22.6c-18.7-6.6-32-24.4-32-45.3s13.3-38.7 32-45.3c9.6-3.4 16-12.5 16-22.6V128c0-35.3-28.7-64-64-64H64zM48 128c0-8.8 7.2-16 16-16H512c8.8 0 16 7.2 16 16v44.9c-28.7 16.6-48 47.6-48 83.1s19.3 66.6 48 83.1V384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V339.1c28.7-16.6 48-47.6 48-83.1s-19.3-66.6-48-83.1V128zM400 304H176V208H400v96zM128 192V320c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z"></path>
  </svg>
);

const IconStations = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208V488c0 13.3 10.7 24 24 24s24-10.7 24-24V256C512 114.6 397.4 0 256 0S0 114.6 0 256V488c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm304-48v48H160V208c0-17.7 14.3-32 32-32H320c17.7 0 32 14.3 32 32zM160 368V304H352v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm32-240c-44.2 0-80 35.8-80 80V368c0 27.7 14.1 52.2 35.5 66.5L111 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57H310.1l57 57c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-36.5-36.5C385.9 420.2 400 395.7 400 368V208c0-44.2-35.8-80-80-80H192zm96 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
  </svg>
);

const IconCapacity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    fill="currentColor"
    {...props}
  >
    <path d="M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 92c0-6.6 5.4-12 12-12s12 5.4 12 12v92H144c-4.4 0-8-3.6-8-8V220zm72 92V256h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H206.8c-5.6-27.4-29.8-48-58.8-48c-33.1 0-60 26.9-60 60v84c0 30.9 25.1 56 56 56h40 54c12 0 22.2 8.9 23.8 20.8l10.4 78.3C273.8 471.1 284 480 296 480h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H317l-7.7-57.5C304.6 338.7 274.1 312 238 312H208zM48 152c0-13.3-10.7-24-24-24s-24 10.7-24 24V328c0 66.3 53.7 120 120 120h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V152z"></path>
  </svg>
);

const IconDuration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M256 0c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24V49.4C383.6 61.3 464 149.2 464 256c0 114.9-93.1 208-208 208S48 370.9 48 256c0-43.3 13.2-83.5 35.8-116.8c7.5-11 4.6-25.9-6.4-33.3s-25.9-4.6-33.3 6.4C16.3 153.2 0 202.7 0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM193 159c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80z"></path>
  </svg>
);

const ViasTrackBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="via-pattern"
        width="60"
        height="201.12"
        patternUnits="userSpaceOnUse"
      >
        <g transform="scale(0.24)">
          <path d="M5.70001 37.5H244.3V71.6H5.70001V37.5Z" fill="#F5EDED" />
          <path
            d="M238.6 43.2V65.9H11.4V43.2H238.6ZM250 31.8H0V77.3H250V31.8Z"
            fill="#bc8482"
          />
          <path d="M5.70001 105.7H244.3V139.8H5.70001V105.7Z" fill="#F5EDED" />
          <path
            d="M238.6 111.4V134.1H11.4V111.4H238.6ZM250 100H0V145.5H250V100Z"
            fill="#bc8482"
          />
          <path d="M5.70001 173.9H244.3V208H5.70001V173.9Z" fill="#F5EDED" />
          <path
            d="M238.6 179.5V202.2H11.4V179.5H238.6ZM250 168.2H0V213.7H250V168.2Z"
            fill="#bc8482"
          />
          <path d="M5.70001 242H244.3V276.1H5.70001V242Z" fill="#F5EDED" />
          <path
            d="M238.6 247.7V270.4H11.4V247.7H238.6ZM250 236.4H0V281.9H250V236.4Z"
            fill="#bc8482"
          />
          <path d="M5.70001 310.2H244.3V344.3H5.70001V310.2Z" fill="#F5EDED" />
          <path
            d="M238.6 315.9V338.6H11.4V315.9H238.6ZM250 304.5H0V350H250V304.5Z"
            fill="#bc8482"
          />
          <path d="M5.70001 378.4H244.3V412.5H5.70001V378.4Z" fill="#F5EDED" />
          <path
            d="M238.6 384.1V406.8H11.4V384.1H238.6ZM250 372.7H0V418.2H250V372.7Z"
            fill="#bc8482"
          />
          <path d="M5.70001 446.6H244.3V480.7H5.70001V446.6Z" fill="#F5EDED" />
          <path
            d="M238.6 452.3V475H11.4V452.3H238.6ZM250 440.9H0V486.4H250V440.9Z"
            fill="#bc8482"
          />
          <path d="M5.70001 514.8H244.3V548.9H5.70001V514.8Z" fill="#F5EDED" />
          <path
            d="M238.6 520.5V543.2H11.4V520.5H238.6ZM250 509.1H0V554.6H250V509.1Z"
            fill="#bc8482"
          />
          <path d="M5.70001 583H244.3V617H5.70001V583Z" fill="#F5EDED" />
          <path
            d="M238.6 588.6V611.3H11.4V588.6H238.6ZM250 577.3H0V622.8H250V577.3Z"
            fill="#bc8482"
          />
          <path d="M5.70001 651.1H244.3V685.2H5.70001V651.1Z" fill="#F5EDED" />
          <path
            d="M238.6 656.8V679.5H11.4V656.8H238.6ZM250 645.5H0V691H250V645.5Z"
            fill="#bc8482"
          />
          <path d="M5.70001 719.3H244.3V753.4H5.70001V719.3Z" fill="#F5EDED" />
          <path
            d="M238.6 725V747.7H11.4V725H238.6ZM250 713.6H0V759.1H250V713.6Z"
            fill="#bc8482"
          />
          <path d="M5.70001 787.5H244.3V821.6H5.70001V787.5Z" fill="#F5EDED" />
          <path
            d="M238.6 793.2V815.9H11.4V793.2H238.6ZM250 781.8H0V827.3H250V781.8Z"
            fill="#bc8482"
          />
          <path d="M39.8 0H73.9V1200H39.8V0Z" fill="#F5EDED" />
          <path
            d="M45.5 1200V0H34.1V1200H45.5ZM79.5 1200V0H68.2V1200H79.5Z"
            fill="#bc8482"
          />
          <path d="M176.1 0H210.2V1200H176.1V0Z" fill="#F5EDED" />
          <path
            d="M181.8 1200V0H170.4V1200H181.8ZM215.9 1200V0H204.5V1200H215.9Z"
            fill="#bc8482"
          />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#via-pattern)" />
  </svg>
);

const benefits = [
  {
    id: 1,
    name: "¿Cuál es el horario de servicio?",
    description:
      "El horario de operación del Tren El Insurgente es el siguiente:\n - Lunes a viernes: de 05:00 a 00:00 h.\n- Sábados: de 06:00 a 00:00 h.\n- Domingos: de 07:00 a 00:00 h.\n\nSalida del último tren:\n- 23:00 h. desde Zinacantepec\n- 00:00 h. desde Observatorio",
    icon: IconSchedule,
  },
  {
    id: 2,
    name: "¿Cuál es el costo del viaje?",
    description:
      "La tarifa del servicio varía de acuerdo con el número de estaciones recorridas y el origen–destino del viaje:\n\n Pagas $15 por recorrido de 1 estación dentro del Estado de México o la Ciudad de México. Ejemplo:\nDe Lerma a Metepec (1 estación) $15\nDe Metepec a Toluca Centro (1 estación) $15\nDe Vasco de Quiroga a Santa Fe (1 estación) $15\nDe Observatorio a Vasco de Quiroga (1 estación) $15\n\nPagas $20 por recorrido de 2 o 3 estaciones dentro del Estado de México. Ejemplo:\nDe Lerma a Toluca Centro (2 estaciones) $20\nDe Zinacantepec a Lerma (3 estaciones) $20\nDe Metepec a Zinacantepec (2 estaciones) $20\nDe Lerma a Zinacantepec (3 estaciones) $20\n\nPagas $25 por viaje entre Santa Fe y Observatorio, o viceversa.\n\nPagas $60 por viaje entre Vasco de Quiroga o Santa Fe y Lerma, o viceversa.\nPagas $70 en estos viajes trayectos específicos:\nDe Observatorio a Lerma (o viceversa) $70\nDe Vasco de Quiroga a Metepec (o viceversa) $70\nDe Santa Fe a Metepec (o viceversa) $70\n\nPagas $80 en estos viajes trayectos específicos:\nDe Observatorio a Metepec (o viceversa) $80\nDe Vasco de Quiroga a Toluca Centro (o viceversa) $80\nDe Santa Fe a Toluca Centro (o viceversa) $80\n\nPagas $90 en estos viajes trayectos específicos:\nDe Observatorio a Toluca Centro (o viceversa) $90\nDe Vasco de Quiroga a Zinacantepec (o viceversa) $90\nDe Santa Fe a Zinacantepec (o viceversa) $90\n\nPagas $100 cuando vas de Zinacantepec a Observatorio o viceversa (Terminal a Terminal).",
    icon: IconCost,
  },
  {
    id: 3,
    name: "¿Cómo puedo ingresar al tren?",
    description:
      "El acceso se realiza mediante la Tarjeta de Movilidad Integrada, la cual es personal e intransferible.Asimismo, puedes adquirir tu boleto en los módulos ubicados en el acceso de cada estación.",
    icon: IconAccess,
    href: "/guia-usuario",
  },
  {
    id: 4,
    name: "¿Cuáles son las estaciones del tren?",
    description:
      "El recorrido del Tren El Insurgente contempla las siguientes estaciones:\n- Zinacantepec\n- Toluca Centro\n- Metepec\n- Lerma- Santa Fe\n- Vasco de Quiroga\n- Observatorio\n\n La frecuencia de paso de los trenes es aproximadamente 10 minutos.",
    icon: IconStations,
  },
  {
    id: 5,
    name: "¿Para cuántas personas tiene capacidad el tren?",
    description:
      "El tren tiene una capacidad total de 719 pasajeros, de los cuales 326 corresponden a asientos ergonómicos, además de 2 espacios destinados para sillas de ruedas.",
    icon: IconCapacity,
  },
  {
    id: 6,
    name: "¿Cuál es la duración del viaje?",
    description: "El trayecto tiene una duración de 60 minutos en total.",
    icon: IconDuration,
  },
];

export const Benefits: React.FC = () => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveItems((prev) => {
          let newActive = [...prev];
          entries.forEach((entry) => {
            const id = Number(entry.target.getAttribute("data-id"));
            if (entry.isIntersecting) {
              if (!newActive.includes(id)) newActive.push(id);
            } else {
              newActive = newActive.filter((i) => i !== id);
            }
          });
          return newActive;
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    const elements = document.querySelectorAll(".benefit-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proyecto" className=" bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative w-full max-w-5xl mx-auto">
          {/* The Via (Track) Background using Inline SVG component */}
          <div className="absolute top-0 bottom-0 w-15 left-8.75 md:left-1/2 transform -translate-x-1/2 z-0 overflow-hidden">
            <ViasTrackBackground />
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-timt-primary transform -translate-x-1/2"></div>
          </div>

          <div className="space-y-16 md:space-y-24 relative z-10 py-10">
            {benefits.map((benefit) => {
              const isLeft = benefit.id % 2 === 0;
              const isActive = activeItems.includes(benefit.id);
              return (
                <div key={benefit.id} data-id={benefit.id} className="relative w-full group benefit-item">
                  {/* Center dot */}
                  <div className="absolute left-8.75 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={`w-6 h-6 bg-white border-[3px] rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm ${isActive ? "border-timt-primary" : "border-gray-300 md:group-hover:border-timt-primary"}`}>
                      <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${isActive ? "bg-timt-primary" : "bg-transparent md:group-hover:bg-timt-primary"}`}></div>
                    </div>
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-[calc(100%-80px)] ml-20 md:w-[45%] p-6 md:p-8 rounded-2xl relative transition-all duration-300 cursor-default shadow-md hover:shadow-lg
                      ${isActive ? "bg-timt-bg" : "bg-timt-bg-light md:group-hover:bg-timt-bg"}
                      ${isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"}
                    `}
                  >
                    {/* Tab/Arrow */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rotate-45 rounded-sm transition-colors duration-300
                        ${isActive ? "bg-timt-bg" : "bg-timt-bg-light md:group-hover:bg-timt-bg"}
                        -left-3 md:-left-3 ${isLeft ? "md:left-auto md:-right-3" : ""}
                      `}
                    ></div>

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-timt-primary text-white shadow-md">
                          <benefit.icon
                            className="h-7 w-7"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {benefit.name}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line text-base leading-relaxed">
                          {benefit.description}
                        </p>
                        {benefit.href && (
                          <div className="mt-4">
                            <Button to={benefit.href} size="sm">Más información</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
